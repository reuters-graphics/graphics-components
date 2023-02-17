import urlJoin from 'proper-url-join';

interface BlockImage {
  Type: string,
  Src: string;
  AltText: string;
  Caption?: string;
  MaxHeight?: string;
}

interface BlockLayout {
  Breakpoint: string;
  Rows: string;
}

interface Block {
  Type: string;
  ID?: string;
  Class?: string;
  Width: string;
  CaptionWidth?: string;
  Gap?: string;
  Images: BlockImage[],
  Layouts: BlockLayout[],
}

export const getPhotoPackPropsFromDoc = (docBlock: Block, assetsPath: string = '') => {
  return {
    id: docBlock.ID,
    cls: docBlock.Class,
    width: docBlock.Width,
    captionWidth: docBlock.CaptionWidth,
    gap: docBlock.Gap && isNaN(docBlock.Gap as any) ? null : parseInt(docBlock.Gap),
    images: docBlock.Images.map((img) => ({
      type: img.Type,
      src: /^https?:\/\/|^\/\//i.test(img.Src) ? img.Src : urlJoin(assetsPath, img.Src),
      altText: img.AltText,
      caption: img.Caption,
      maxHeight: img.MaxHeight && isNaN(img.MaxHeight as any) ? null : parseFloat(img.MaxHeight),
    })),
    layouts: docBlock.Layouts.map((layout) => ({
      breakpoint: isNaN(layout.Breakpoint as any) ? null : parseFloat(layout.Breakpoint),
      rows: layout.Rows.split(',').map(r => parseInt(r.trim())),
    })),
  };
};
