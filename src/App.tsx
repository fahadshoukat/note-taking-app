
import SideBar from "./components/sideBar/SideBar";
import NoteContainer from "./components/noteContainer/NoteContainer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <NoteContainer />
    </div>
  );
}

export default App;
