import React, { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";

const App = () => {
  const [notes, setNotes] = useState([{
    note_id: nanoid(),
    note_text: ""
  }]);
  const [isShown, setIsShown] = useState(false);

  const NewNote = event => {

    console.log("You clicked create note");
    setIsShown(true);
  };

  const CloseCreateNote = event => {

    console.log("You clicked close create note");
    setIsShown(false);

  };


  const addNote = (note_message) => {

    console.log("Note message (App.js): " + note_message);
    const new_note = {
      note_id: nanoid(),
      note_text: note_message

    }

    const newNotes = [...notes, new_note];
    setNotes(newNotes);
  }
 
  return (
    <>
      <div className="header">
          <h1>Note Taking App</h1>
          <p>Created using ReactJs</p>
          <small>Rich Web Application Technology Week 11 Lab</small>
      </div>
      <div className="button-container">
        <button onClick={NewNote} className='create-note-btn'>Create Notes</button>
      </div>
      
      {isShown && 
      <CreateNote setIsShown={CloseCreateNote} addNewNote={addNote}/>}

      <h2>Your Created Notes:</h2>
      <div className="notes-container">
        <NotesList notes={notes}/>
      </div>

    </> 
  )
}

export default App;