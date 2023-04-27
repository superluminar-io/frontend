import { Note } from "../types";

interface NotesItemProps {
  note: Note;
}

export const NotesItem: React.FunctionComponent<NotesItemProps> = ({
  note,
}) => {
  return (
    <div className="notes-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button className="delete-button">🗑️</button>
    </div>
  );
};
