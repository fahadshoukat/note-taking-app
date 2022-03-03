import Header from "../header/Header";
import Note from "../note/Note";
import "./noteContainer.css";

const NoteContainer = (props: any) => {
  return (
    <div>
      <Header />
      <div className="note-container">
        {props.notes.map((item: any, index: number) => (
          <Note key={index} note={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteContainer;
