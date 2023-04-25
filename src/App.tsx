import "./App.css";
import AddNotesForm from "./Components/AddNotesForm";

import { NotesList } from "./Components/NotesList";


function App() {
  return (
    <main style={{width: "100%"}}>
      <header style={{width: "100%"}}>
        <img src="logo.png" alt="logo" />
        <h3>Notes app</h3>
      </header>
      <AddNotesForm />
      <NotesList />
    </main>
  );
}

export default App;
