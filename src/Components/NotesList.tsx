import { useState, useEffect } from "react";
import { listNotes } from "../services/notes";
import { NotesItem } from "./NotesItem";
import { Note } from "../types";

export const NotesList: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    const currentNotes = await listNotes();
    setNotes(currentNotes);
  };

  useEffect(() => {
    fetchData();
  }, [notes]);

  return (
    <>
      {notes.map((note: Note) => (
        <NotesItem note={note} key={note.id} />
      ))}
    </>
  );
};
