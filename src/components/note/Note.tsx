
import './note.css'


const Note = (props: any) => {
  return (
    <div className='note' style={{backgroundColor: props.note.color}}>
        <textarea className='note_text' defaultValue={props.note.text}/>
        <p>{props.note.time}</p>
    </div>
  )
}

export default Note;