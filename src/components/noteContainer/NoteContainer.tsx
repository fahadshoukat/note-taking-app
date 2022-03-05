
import Header from "../header/Header";
import Note from "../note/Note";
import "./noteContainer.css";

const NoteContainer = (props: any) => {
  console.log(props);
  
  return (
    <div>
      <Header />
      <div className="note-container">
        {props.notes.map((item: any) => (
          <Note key={item.id} note={item} />
        ))}
      </div>
    </div>
  );
};

export default NoteContainer;
