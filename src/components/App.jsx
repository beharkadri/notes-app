import React from "react"
import Header from "./Header";
//import Footer from "./Footer";
import CreateNoteArea from "./CreateNoteArea";
import Note from "./Note";
//import notes from "../notes";

function App(){

    const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem('array')) || []);
    React.useEffect(() => {
        localStorage.setItem('array', JSON.stringify(notes));
      }, ['array', notes]);

    function addNote(note){
        setNotes(prevNotes => [...prevNotes, note]);
    }
    function deleteNote(id){
        setNotes(prevNotes => notes.filter((note, index) => index!==id));
    }


    return <div>
        <Header />
        <CreateNoteArea onClick={addNote}/>
        <div className="notes-wrapper">
            {notes.map((note, index) => <Note key={index} id={index} onClickDelete={deleteNote} title={note.title} content={note.content} />)}
        </div>
    </div>;
}

export default App;