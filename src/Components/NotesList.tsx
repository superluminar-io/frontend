import { useState, useEffect } from "react";
import { listNotes } from "../services/notes";
import { NotesItem } from "./NotesItem";

export const NotesList: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<any>([]);

  const fetchData = async () => {
    const apiNotes = await listNotes();
    setNotes(apiNotes);
    console.log(apiNotes);
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
