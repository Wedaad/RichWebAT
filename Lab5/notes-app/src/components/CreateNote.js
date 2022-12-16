import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import Note  from './Note';

export default function CreateNote({setIsShown, addNewNote}) {

  const [noteText, setNoteText] = useState("");

  // getting the note message the user enters
  const getNoteText = (event) => {
    setNoteText(event.target.value);

  }

  // saving note
  const saveNote = () => {
    console.log("Note saved :)");
    addNewNote(noteText);
    
  }

  return (
    <div>
      <div className='create-note'>
        <MdClose className='close-btn' onClick={setIsShown}/>
        <div className='new-note-content'>
          <h2>Creating New Note</h2>
              <textarea 
              placeholder='Add new note content here...'
              value={noteText}
              onChange={getNoteText}
              ></textarea>
        </div>

        <div className="colour-list">
          <select id="colour_list" name="colours">
            <option value="white">White</option>
            <option value="lightgoldenrodyellow">Yellow</option>
            <option value="#BFEFE4">Pastel Blue</option>
            <option value="lightgreen">Green</option>
            <option value="plum">Violet</option>
            <option value="pink">Pink</option>
          </select>
        </div>

        <button className='save-note-btn' onClick={saveNote}>Save Note</button>
      </div>
    </div>
  )
}
