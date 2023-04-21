import { useState, useEffect } from "react";
import { listNotes } from "../services/notes";
import { NotesItem } from "./NotesItem";

export const NotesList: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<any>([]);

  const fetchData = async () => {
    const currentNotes = await listNotes();
    setNotes(currentNotes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {notes.map((note: any) => (
        <NotesItem title={note.title} />
      ))}
    </>
  );
};
