import urlJoin from 'proper-url-join';

interface Video {
  Breakpoint: string;
  AspectRatio: string;
  Src: string;
}

interface Annotation {
  Anno: string;
  Start: string;
  End: string;
  Width?: string;
  Props?: object;
}

interface Foreground {
  Element: string;
  Position: string;
  Props?: object;
}

interface Block {
  Type: string;
  Videos: Video[];
  Id?: string;
  Cls?: string;
  Width?: string;
  AnnoFadeDelay?: string;
  AnnoFadeDuration?: string;
  AnnotationClass?: string;
  Annotations?: Annotation[];
  Caption?: string;
  CaptionWidth?: string;
  Debug?: string;
  Embedded?: string;
  EmbeddedHeight?: string;
  EmbeddedLength?: string;
  Foreground?: Foreground[];
  ForegroundClass?: string;
  ForegroundPosition?: string;
  Height?: string;
  PosterSrc?: string;
  TransitionSpeed?: string;
}

export const getVideoScrollerPropsFromDoc = (
  docBlock: Block,
  assetsPath: string = '',
  annotationObject: object = {}
) => {
  const props = {
    id: docBlock.Id,
    cls: docBlock.Cls,
    width: docBlock.Width,
    videos: docBlock.Videos.map((vid) => ({
      src: /^https?:\/\/|^\/\//i.test(vid.Src) ?
        vid.Src :
        urlJoin(assetsPath, vid.Src),
      breakpoint: isNaN(vid.Breakpoint as any) ?
        undefined :
        parseFloat(vid.Breakpoint),
      aspectRatio: vid.AspectRatio,
    })),
    annoFadeDelay: isNaN(docBlock.AnnoFadeDelay as any) ?
      undefined :
      parseFloat(docBlock.AnnoFadeDelay),
    annoFadeDuration: isNaN(docBlock.AnnoFadeDuration as any) ?
      undefined :
      parseFloat(docBlock.AnnoFadeDuration),
    annotationClass: docBlock.AnnotationClass,
    annotationObject,
    annotations: docBlock.Annotations?.map((anno) => ({
      anno: anno.Anno,
      start: isNaN(anno.Start as any) ?
        0 :
        parseFloat(anno.Start),
      end: isNaN(anno.End as any) ?
        1 :
        parseFloat(anno.End),
      width: anno.Width ? anno.Width : undefined,
      props: anno.Props ? anno.Props : undefined,
    })),
    assetsPath,
    foregroundClass: docBlock.ForegroundClass,
    foregroundPosition: docBlock.ForegroundPosition,
    foreground: docBlock.Foreground?.map((fgnd) => ({
      element: fgnd.Element,
      position: isNaN(fgnd.Position as any) ?
        0 :
        parseFloat(fgnd.Position),
      props: fgnd.Props ? fgnd.Props : undefined,
    })),
    debug: docBlock.Debug === 'true',
    caption: docBlock.Caption,
    captionWidth: docBlock.CaptionWidth,
    height: isNaN(docBlock.Height as any) ?
      undefined :
      parseFloat(docBlock.Height),
    embedded: docBlock.Embedded === 'true',
    embedHeight: isNaN(docBlock.EmbeddedHeight as any) ?
      undefined :
      parseFloat(docBlock.EmbeddedHeight),
    embedLength: isNaN(docBlock.EmbeddedLength as any) ?
      undefined :
      parseFloat(docBlock.EmbeddedLength),
    transitionSpeed: isNaN(docBlock.TransitionSpeed as any) ?
      undefined :
      parseFloat(docBlock.TransitionSpeed),
    posterSrc: /^https?:\/\/|^\/\//i.test(docBlock.PosterSrc) ?
      docBlock.PosterSrc :
      urlJoin(assetsPath, docBlock.PosterSrc),
  };

  return props;
};
