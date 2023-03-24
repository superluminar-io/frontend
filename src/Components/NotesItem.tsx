import { Note } from "../types";

export interface NotesItemProps {
  //   noteDetails: Note;
  content: string;
  date: string;
}

export const NotesItem: React.FunctionComponent<NotesItemProps> = ({
  content,
  date,
}) => {
  return (
    <div className="notes-item">
      <p>{content}</p>
      <span>{date}</span>
      <button className="delete-button">🗑️</button>
    </div>
  );
};
