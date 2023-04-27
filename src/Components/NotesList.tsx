import { NotesItem } from "./NotesItem";
import { Note } from "../types";

interface NotesListProps {
  notes: Note[];
}

export const NotesList: React.FunctionComponent<NotesListProps> = ({
  notes,
}) => {
  return (
    <div className="notes-list">
      {notes.map((note: Note) => (
        <NotesItem note={note} key={note.id} />
      ))}
    </div>
  );
};
