import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";

const App = () => {
  const [notes, setNotes] = useState([]); // keeps the created notes
  const [isShown, setIsShown] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [editID, setEditID] = useState();

  const NewNote = event => {

    console.log("You clicked create note");
    setIsShown(true);
  };

  const CloseCreateNote = event => {

    console.log("You clicked close create note");
    setIsShown(false);

  };

  const CloseEditNote = event => {

    console.log("You clicked close edit note");
    setIsVisible(false);

  };

  const addNote = (note_message, colour) => {
    const note_ID = nanoid();
    
    const new_note = {
      note_id: note_ID,
      note_text: note_message,
      background_colour: colour,

    }

    const newNotes = [...notes, new_note]; //adding new note to the existing array of notes
    setNotes(newNotes);
  }

  // delete notes
  const deleteNote = (note_id) => {
    
    const newNotes = notes.filter((note) => note.note_id !== note_id);
    setNotes(newNotes);
    console.log("Note deleted!");

  }

  // display edit note modal
  const showEditPopUp = (note_id) => {
    setIsVisible(true); 
    setEditID(note_id); // setting the id of the note that needs to be edited

  }

  // edit note functionality 
  const editNote = (new_text, new_colour) => {

    const updatedNotes = notes.map((note) => {

      if(editID === note.note_id) {
        console.log("inside if");

        // if no new text is entered
        if(!new_text) {

          // return original text and keep the new note colour
          return {...note, note_text: note.note_text, background_colour: new_colour};
        } 

        // if no new colour is chosen
        if(!new_colour) {

          // return new text and keep the original note colour
          return {...note, note_text: new_text, background_colour: note.background_colour};
        }

        return {...note, note_text: new_text, background_colour: new_colour};
      }

      return note;

    });
    
    setNotes(updatedNotes);
    console.log("Note edited!");

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
        <NotesList notes={notes} deleteNotes={deleteNote} displayEdit={showEditPopUp} editCurrentNote={editNote}/>
      </div>

      {visible && 
      <EditNote editCurrentNote={editNote} setIsShown={CloseEditNote}/>}

    </> 
  )
}

export default App;