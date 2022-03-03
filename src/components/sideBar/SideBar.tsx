import { useState } from "react";
import "./sideBar.css";

const SideBar = () => {
  const colors = ["#FFC75F", "#F9F871", "#2C73D2", "#00C9A7", "#FF8066"];

  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sideBar">
      <button onClick={() => setListOpen(!listOpen)}>Add Note</button>
      <ul className={`sideBar_list ${listOpen ? "sideBar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sideBar_list_item"
            style={{ backgroundColor: color }}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
