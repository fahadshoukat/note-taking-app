import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";
import * as React from "react";

import "./App.css";

function App() {
  const [notes, setNotes] = React.useState([
    {
      id: "1",
      text: "fahad",
      time: "",
      color: "lightGreen",
    }
  ]);

  const addNote = (color: any) => {
    const tempNotes = [...notes];

    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random()*90),
      text: "",
      time: new Date().toLocaleTimeString(),
      color
    });

    setNotes(tempNotes)
  };

  const deleteNote = (id: any) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id)

    if(index < 0) return

    tempNotes.splice(index, 1)
    setNotes(tempNotes)
  } 

  return (
    <div className="app-container">
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
