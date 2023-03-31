import { useState, useEffect } from "react";
import { listNotes } from "../services/notes";
import { NotesItem } from "./NotesItem";

const notes = [
  {
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperior",
    date: "2021-03-01T12:00:00.000Z",
  },
  {
    content:
      "Eligendi deleniti nam, totam porro quia repellendus perferendis velit inventore quos laudantium! Ex debitis, nemo itaque inventore nisi aliquam.",
    date: "2021-02-01T12:00:00.000Z",
  },
  {
    content:
      "Sequi, illo, repellat illumsimilique fugit voluptatibus commodi ea dolorem quibusdam nesciuntnatus reprehenderit? Veritatis soluta suscipit, optio, ipsum porro autem natus in atque, minima impedit ullam architecto qui incidunt iusto harum voluptates neque possimus at nihil nam vel quiamolestias. Eligendi, quia nisi?t",
    date: "2021-01-01T12:00:00.000Z",
  },
];

export const NotesList: React.FunctionComponent = () => {
  const [newNotes, setNotes] = useState<any>([]);

  useEffect(() => {
    const apiNotes = listNotes();
    setNotes(apiNotes);
    console.log(apiNotes);
  }, []);

  return (
    <>
      {notes.map((note) => (
        <NotesItem content={note.content} date={note.date} />
      ))}
    </>
  );
};
