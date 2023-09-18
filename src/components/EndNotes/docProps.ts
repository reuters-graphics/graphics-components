interface EndNote {
  Title: String;
  Text: String;
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
