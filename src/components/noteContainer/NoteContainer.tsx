import Note from "../note/Note";
import "./noteContainer.css";

const NoteContainer = (props: any) => {
  console.log(props);

  return (
      <div className="note-container">
        {props.notes.map((item: any) => (
          <Note key={item.id} note={item} deleteNote={props.deleteNote} />
        ))}
      </div>
  );
};

export default NoteContainer;
