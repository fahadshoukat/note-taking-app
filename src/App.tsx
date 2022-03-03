
import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";

import "./App.css";

function App() {

  const notes = [
    {
      text: "fahad",
      time: "01:45 PM",
      color: "blue"
    },
    {
      text: "zahad",
      time: "11:45 PM",
      color: "green"
    },
    {
      text: "sdfadsf",
      time: "01:25 PM",
      color: "cyan"
    },
    {
      text: "dadsf",
      time: "12:45 PM",
      color: "orange"
    },
    {
      text: "fasdsas",
      time: "01:00 PM",
      color: "gray"
    },
  ]

  return (
    <div className="app-container">
      <SideBar />
      <NoteContainer notes={notes} />
    </div>
  );
}

export default App;
