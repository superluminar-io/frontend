import { Note } from "../types";

interface NotesItemProps {
  note: Note;
}

export const NotesItem: React.FunctionComponent<NotesItemProps> = ({
  note,
}) => {
  return (
    <div className="notes-item">
      <h3 className="note-header">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      <button className="note-delete-button">🗑️</button>
    </div>
  );
};
