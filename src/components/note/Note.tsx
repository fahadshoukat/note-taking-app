import "./note.css";

const Note = (props: any) => {
  const formateDate = (value: any) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    if (!value) return "";
    const date = new Date(value);

    let hours = date.getHours();
    let amPm = hours > 12 ? "PM" : "AM";
    hours = hours ? hours : 12;
    hours = hours > 12 ? (hours = 24 - hours) : hours;

    let minutes = date.getMinutes();

    let day = date.getDate();

    let month = months[date.getMonth()]

    return `${hours}:${minutes} ${amPm} ${day} ${month}`
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text" defaultValue={props.note.text} />
      <div className="note-footer">
        <h4>{formateDate(props.note.time)}</h4>
        <button
          className="noselect"
          id="deleteBtn"
          onClick={() => props.deleteNote(props.note.id)}
        >
          <span className="text">Delete</span>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Note;
