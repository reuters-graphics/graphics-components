interface EndNote {
  Title: string;
  Text: string;
}

type EndNotes = EndNote[];

export const getEndNotesPropsFromDoc = (endNotes: EndNotes) => {
  return endNotes.map((d) => {
    return {
      title: d.Title,
      text: d.Text,
    };
  });
};
