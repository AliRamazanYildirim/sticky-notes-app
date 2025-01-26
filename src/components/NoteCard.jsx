const NoteCard = ({ note }) => {
  let body;
  try {
    body = JSON.parse(note.body);
  } catch {
    body = note.body; // JSON değilse, olduğu gibi kullan
  }

  return <div>{body}</div>;
};

export default NoteCard;