import { Note } from "../types";

export interface NotesItemProps {
  //   noteDetails: Note;
  title: string;
  // date: string;
}

export const NotesItem: React.FunctionComponent<NotesItemProps> = ({
  title,
}) => {
  return (
    <div className="notes-item">
      <p>{title}</p>
      {/* <span>{date}</span> */}
      <button className="delete-button">🗑️</button>
    </div>
  );
};
