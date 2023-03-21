import "./App.css";
import { NotesList } from "./Components/NotesList";

function App() {
  return (
    <main>
      <header>
        <h1>My awesome notes app</h1>
      </header>
      <div>
        <label htmlFor="">What do you want to add to your list?</label>
        <input type="text" />
        <button>Add note</button>
      </div>
      <NotesList />
    </main>
  );
}

export default App;
