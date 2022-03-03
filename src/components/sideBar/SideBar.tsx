import "./sideBar.css";

const SideBar = () => {
  const colors = ["#FFC75F", "#F9F871", "#2C73D2", "#00C9A7", "#FF8066"];
  return (
    <div className="sideBar">
      <button>Add Note</button>
      <ul className="sideBar_list">
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
