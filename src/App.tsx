import "./App.css";
import { useEffect, useState } from "react";
import { listNotes } from "./services/notes";
import { createNote } from "./services/notes";
import { Note } from "./types";

import { Navbar } from "./Components/Navbar";
import { AddNotesForm } from "./Components/AddNotesForm";
import { Divider } from "./Components/Divider";
import { NotesList } from "./Components/NotesList";
import { Footer } from "./Components/Footer";


const App: React.FunctionComponent = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const currentNotes = await fetchData();
      setNotes(currentNotes);
    };
    fetchNotes();
  }, []);

  const fetchData = async () => {
    const currentNotes = await listNotes();
    return currentNotes;
  };

  const addNote = async (newNote: Note) => {
    console.log('Adding note:', newNote);
    await createNote(newNote);
    const newNotes = await fetchData()
    setNotes(newNotes);
  };

  return (
    <>
      <Navbar />
      <AddNotesForm createNote={addNote} />
      <Divider />
      <NotesList notes={notes} />
      <Footer />
    </>
  );
};

export default App;
