import Note from "../note/Note";
import './noteContainer.css'

const NoteContainer = () => {
  return (
    <div className="note-container">
      <Note
        note={{
          text: "sdfasdadsf",
          time: "01:45 PM",
          color: "blue",
        }}
      />
      <Note
        note={{
          text: "sdfasdadsf",
          time: "01:45 PM",
          color: "red",
        }}
      />
      <Note
        note={{
          text: "sdfasdadsf",
          time: "01:45 PM",
          color: "green",
        }}
      />
      <Note
        note={{
          text: "sdfasdadsf",
          time: "01:45 PM",
          color: "purple",
        }}
      />
      <Note
        note={{
          text: "sdfasdadsf",
          time: "01:45 PM",
          color: "orange",
        }}
      />
    </div>
  );
};

export default NoteContainer;
