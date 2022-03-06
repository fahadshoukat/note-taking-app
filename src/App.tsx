import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";
import Header from "./components/header/Header";
import { useState } from "react";

import "./App.css";

interface AddObject {
  id: string;
  text: string;
  time: Date;
  color: string;
}

function App() {
  const [notes, setNotes] = useState<AddObject[]>([]);

  const addNote = (color: string) => {
    const tempNotes = [...notes];

    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random() * 90),
      text: "",
      time: new Date(),
      color,
    });

    setNotes(tempNotes);
  };

  const deleteNote = (id: string) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  return (
    <div>
      <Header />
      <SideBar addNote={addNote} />
      <div className="app-container">
        <NoteContainer notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
