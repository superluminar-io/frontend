import { useEffect, useState } from "react";
import "./App.css";
import AddNotesForm from "./Components/AddNotesForm";

import { NotesList } from "./Components/NotesList";
import { Note } from "./types";
import { listNotes } from "./services/notes";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    const currentNotes = await listNotes();
    setNotes(currentNotes);
  };

  useEffect(() => {
    fetchData();
  }, [notes]);
  
  return (
    <main style={{ width: "100%" }}>
      <header style={{ width: "100%" }}>
        <img src="logo.png" alt="logo" />
        <h3>Notes app</h3>
      </header>
      <AddNotesForm />
      <NotesList notes={notes} />
    </main>
  );
}

export default App;
