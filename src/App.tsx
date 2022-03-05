import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";
import { useState } from "react";

import "./App.css";


function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      text: "fahad",
      time: 1,
      color: "lightGreen",
    }
  ]);

  const addNote = (color: any) => {
    const tempNotes = [...notes];

    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random()*90),
      text: "",
      time: Date.now(),
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
