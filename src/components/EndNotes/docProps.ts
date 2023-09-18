interface EndNote {
  Title: String;
  Text: String;
}

type Block = EndNote[];

export const getEndNotesPropsFromDoc = (docBlock: Block) => {
  return docBlock.map((d) => {
    return {
      title: d.Title,
      text: d.Text,
    };
  });
};
