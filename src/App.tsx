import "./App.css";
import { useState } from "react";
import { NotesList } from "./Components/NotesList";
import { createNote } from "./services/notes";

function App() {
  const [state, setState] = useState<any>({
    title: "",
    content: "",
  });

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(state);
    const data = { content: state.content, title: state.title };
    await createNote(data);
    setState({ title: "", content: "" });
  };

  return (
    <main>
      <header>
        <h1>My awesome notes app</h1>
      </header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>What do you want to add to your list?</label>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={state.title}
          onChange={(e) => handleChange(e)}
        />

        <label>Content</label>
        <input
          name="content"
          type="text"
          value={state.content}
          onChange={(e) => handleChange(e)}
        />

        <button>Add note</button>
      </form>
      <NotesList />
    </main>
  );
}

export default App;
