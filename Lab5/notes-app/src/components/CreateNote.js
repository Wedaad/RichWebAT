import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function CreateNote({setIsShown, addNewNote}) {

  const [noteText, setNoteText] = useState("");
  const [colour, setColour] = useState();

  // getting the note message the user enters
  const getNoteText = (event) => {
    setNoteText(event.target.value);

  }

  // saving note
  const saveNote = () => {
    console.log("Note saved :)");
    setIsShown(true);
    addNewNote(noteText, colour);
    
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
          <select id="colour_list" name="colours" value={colour} onChange={e => setColour(e.target.value)}>
            <option value="white">Selet a colour</option>
            <option value="#FAC98F">Pastel Orange</option>
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
