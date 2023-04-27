import React, { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { createNote } from "../services/notes";
import { Note } from "../types";

const AddNotesForm: React.FunctionComponent = () => {
  const [state, setState] = useState<Note>({
    title: "",
    content: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    const data = { content: state.content, title: state.title };
    await createNote(data);
    setState({ title: "", content: "" });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>New Note</h3>
      <input
        name="title"
        type="text"
        placeholder="Title"
        required
        value={state.title}
        onChange={(e) => handleChange(e)}
      />

      <input
        name="content"
        type="text"
        placeholder="Content"
        required
        value={state.content}
        onChange={(e) => handleChange(e)}
      />

      <button>Add note</button>
    </form>
  );
};

export default AddNotesForm;
