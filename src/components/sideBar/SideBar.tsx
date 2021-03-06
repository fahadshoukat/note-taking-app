import { useState } from "react";
import "./sideBar.css";

const SideBar = (props: any) => {
  const colors = ["#FFC75F", "#F9F871", "#00C9A7", "#FF8066", "#FFFADE", "#90ee90", "#b0e5ff", "#ffc6b0"];

  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sideBar">
      <button className="addBtn" onClick={() => setListOpen(!listOpen)}>Add Note</button>
      <ul className={`sideBar_list ${listOpen ? "sideBar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sideBar_list_item"
            style={{ backgroundColor: color }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
