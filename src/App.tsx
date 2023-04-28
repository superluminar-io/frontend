import { useEffect, useState } from "react";
import "./App.css";
import AddNotesForm from "./Components/AddNotesForm";

import { NotesList } from "./Components/NotesList";
import { Note } from "./types";
import { listNotes } from "./services/notes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

const App: React.FunctionComponent = () => {
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
      <Navbar />
      <AddNotesForm />
      <NotesList notes={notes} />
      <Footer />
    </>
  );
};

export default App;
