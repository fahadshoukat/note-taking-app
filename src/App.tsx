import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";
import { useState } from "react";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      text: "fahad",
      time: "01:45 PM",
      color: "blue",
    }
  ]);

  const addNote = (color: any) => {
    const tempNotes = [...notes];

    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random()*90),
      text: "",
      time: "",
      color
    });

    setNotes(tempNotes)
  };

  return (
    <div className="app-container">
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
