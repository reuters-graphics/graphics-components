import * as MP4Box from 'mp4box';

interface MP4BoxBuffer extends ArrayBuffer {
  fileStart: number;
}

/**
 * Taken from https://github.com/w3c/webcodecs/blob/main/samples/mp4-decode/mp4_demuxer.js
 */
class Writer {
  data: Uint8Array;
  idx: number;
  size: number;

  constructor(size: number) {
    this.data = new Uint8Array(size);
    this.idx = 0;
    this.size = size;
  }

  getData(): Uint8Array {
    if (this.idx !== this.size)
      throw new Error('Mismatch between size reserved and sized used');
    return this.data.slice(0, this.idx);
  }

  writeUint8(value: number): void {
    this.data.set([value], this.idx);
    this.idx += 1;
  }

  writeUint16(value: number): void {
    const arr = new Uint16Array(1);
    arr[0] = value;
    const buffer = new Uint8Array(arr.buffer);
    this.data.set([buffer[1], buffer[0]], this.idx);
    this.idx += 2;
  }

  writeUint8Array(value: number[]): void {
    this.data.set(value, this.idx);
    this.idx += value.length;
  }
}

/**
 * Taken from https://github.com/w3c/webcodecs/blob/main/samples/mp4-decode/mp4_demuxer.js
 *
 * @param avccBox
 * @returns {*}
 */
interface NALUnit {
  length: number;
  nalu: number[];
}

const getExtradata = (avccBox: {
  SPS: NALUnit[];
  PPS: NALUnit[];
  configurationVersion: number;
  AVCProfileIndication: number;
  profile_compatibility: number;
  AVCLevelIndication: number;
  lengthSizeMinusOne: number;
  nb_SPS_nalus: number;
  nb_PPS_nalus: number;
}) => {
  let i;
  let size = 7;
  for (i = 0; i < avccBox.SPS.length; i += 1) {
    // nalu length is encoded as a uint16.
    size += 2 + (avccBox.SPS[i] as { length: number }).length;
  }
  for (i = 0; i < avccBox.PPS.length; i += 1) {
    // nalu length is encoded as a uint16.
    size += 2 + (avccBox.PPS[i] as { length: number }).length;
  }

  const writer = new Writer(size);

  writer.writeUint8(avccBox.configurationVersion);
  writer.writeUint8(avccBox.AVCProfileIndication);
  writer.writeUint8(avccBox.profile_compatibility);
  writer.writeUint8(avccBox.AVCLevelIndication);

  writer.writeUint8(avccBox.lengthSizeMinusOne + (63 << 2));

  writer.writeUint8(avccBox.nb_SPS_nalus + (7 << 5));
  for (i = 0; i < avccBox.SPS.length; i += 1) {
    writer.writeUint16(avccBox.SPS[i].length);
    writer.writeUint8Array(avccBox.SPS[i].nalu);
  }

  writer.writeUint8(avccBox.nb_PPS_nalus);
  for (i = 0; i < avccBox.PPS.length; i += 1) {
    writer.writeUint16(avccBox.PPS[i].length);
    writer.writeUint8Array(avccBox.PPS[i].nalu);
  }

  return writer.getData();
};

/**
 * decodeVideo takes an url to a mp4 file and converts it into frames.
 *
 * The steps for this are:
 *  1. Determine the codec for this video file and demux it into chunks.
 *  2. Read the chunks with VideoDecoder as fast as possible.
 *  3. Return an array of frames that we can efficiently draw to a canvas.
 *
 * @param src
 * @param VideoDecoder
 * @param EncodedVideoChunk
 * @param emitFrame
 * @param debug
 * @returns {Promise<unknown>}
 */
const decodeVideo = (
  src: string,
  emitFrame: (frame: ImageBitmap) => void,
  {
    VideoDecoder,
    EncodedVideoChunk,
    debug,
  }: {
    VideoDecoder: typeof window.VideoDecoder;
    EncodedVideoChunk: typeof window.EncodedVideoChunk;
    debug: boolean;
  }
): Promise<unknown> =>
  new Promise<string>((resolve, reject) => {
    if (debug) console.info('Decoding video from', src);

    try {
      // Uses mp4box for demuxing
      const mp4boxfile = MP4Box.createFile();

      // Holds the codec value
      let codec = 'N/A';

      // Creates a VideoDecoder instance
      const decoder = new VideoDecoder({
        output: (frame) => {
          createImageBitmap(frame, { resizeQuality: 'high' }).then((bitmap) => {
            emitFrame(bitmap);
            frame.close();

            if (decoder.decodeQueueSize <= 0) {
              // Give it an extra half second to finish everything
              setTimeout(() => {
                if (decoder.state !== 'closed') {
                  decoder.close();
                  resolve(codec);
                }
              }, 500);
            }
          });
        },
        error: (e) => {
          console.error(e);
          reject(e);
        },
      });

      mp4boxfile.onReady = (info) => {
        if (info && info.videoTracks && info.videoTracks[0]) {
          [{ codec }] = info.videoTracks;
          if (debug) console.info('Video with codec:', codec);

          // Define a type for moov to avoid using 'any'
          interface AvcCBox {
            SPS: NALUnit[];
            PPS: NALUnit[];
            configurationVersion: number;
            AVCProfileIndication: number;
            profile_compatibility: number;
            AVCLevelIndication: number;
            lengthSizeMinusOne: number;
            nb_SPS_nalus: number;
            nb_PPS_nalus: number;
          }
          interface StsdEntry {
            avcC: AvcCBox;
          }
          interface Stsd {
            entries: StsdEntry[];
          }
          interface Stbl {
            stsd: Stsd;
          }
          interface Minf {
            stbl: Stbl;
          }
          interface Mdia {
            minf: Minf;
          }
          interface Trak {
            mdia: Mdia;
          }
          interface Moov {
            traks: Trak[];
          }

          // Gets the avccbox used for reading extradata
          const moov = mp4boxfile.moov as Moov | undefined;
          const avccBox = moov?.traks[0].mdia.minf.stbl.stsd.entries[0].avcC;
          if (!avccBox) {
            reject(new Error('Could not find avcC box for extradata.'));
            return;
          }
          const extradata = getExtradata(avccBox);

          // configure decoder
          decoder.configure({ codec, description: extradata });

          // Setup mp4box file for breaking it into chunks
          mp4boxfile.setExtractionOptions(info.videoTracks[0].id);
          mp4boxfile.start();
        } else reject(new Error('URL provided is not a valid mp4 video file.'));
      };

      mp4boxfile.onSamples = (_track_id, _ref, samples) => {
        for (let i = 0; i < samples.length; i += 1) {
          const sample = samples[i];
          const type = sample.is_sync ? 'key' : 'delta';

          const chunk = new EncodedVideoChunk({
            type,
            timestamp: sample.cts,
            duration: sample.duration,
            data: sample.data,
          });

          decoder.decode(chunk);
        }
      };

      // Fetches the file into arraybuffers
      fetch(src).then((res) => {
        if (!res.body) throw new Error('Response body is null');
        const reader = res.body.getReader();
        let offset = 0;

        function appendBuffers(
          result: ReadableStreamReadResult<Uint8Array>
        ): Promise<void | null> {
          if (result.done) {
            mp4boxfile.flush();
            return Promise.resolve();
          }

          const buf = result.value.buffer as MP4BoxBuffer;
          buf.fileStart = offset;
          offset += buf.byteLength;
          mp4boxfile.appendBuffer(buf);

          return reader.read().then(appendBuffers);
        }

        return reader.read().then(appendBuffers);
      });
    } catch (e) {
      reject(e);
    }
  });

/**
 * The main function for decoding video. Deals with the polyfill cases first,
 * then calls our decodeVideo.
 *
 * @param src
 * @param emitFrame
 * @param debug
 * @returns {Promise<never>|Promise<void>}
 */
export default (
  src: string,
  emitFrame: (frame: ImageBitmap) => void,
  debug: boolean = false
) => {
  // If our browser supports WebCodecs natively
  if (
    typeof VideoDecoder === 'function' &&
    typeof EncodedVideoChunk === 'function'
  ) {
    if (debug)
      console.info('WebCodecs is natively supported, using native version...');

    return decodeVideo(src, emitFrame, {
      VideoDecoder,
      EncodedVideoChunk,
      debug,
    });
  }

  // Otherwise, resolve nothing
  if (debug) console.info('WebCodecs is not available in this browser.');
  return Promise.resolve('N/A');
};
