import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

export default function EditNote({editCurrentNote, setIsShown}) {

  const [noteText, setNoteText] = useState("");
  const [colour, setColour] = useState();

  // getting the note message the user enters
  const getNewNoteText = (event) => {
    setNoteText(event.target.value);

  }

  const getNewNoteColour = (event) => {
    setColour(event.target.value)

  }

  const updateNote = () => {

    console.log("inside update note")
    console.log("New note text: " + noteText + " new note colour: " + colour);
    setIsShown(true); // closing the pop-up when button is clicked
    editCurrentNote(noteText, colour); // passing new text and new colour
  }

    
  return (
    <div>
      <div className='create-note'>
        <MdClose className='close-btn' onClick={setIsShown}/>
        <div className='new-note-content'>
          <h2>Editing Note</h2>
              <textarea 
              placeholder='New note content...'
              value={noteText}
              onChange={getNewNoteText}
              ></textarea>
        </div>

        <div className="colour-list">
          <select id="colour_list" name="colours" value={colour} onChange={getNewNoteColour}>
            <option value="white">Selet a colour</option>
            <option value="#FAC98F">Pastel Orange</option>
            <option value="lightgoldenrodyellow">Yellow</option>
            <option value="#BFEFE4">Pastel Blue</option>
            <option value="lightgreen">Green</option>
            <option value="plum">Violet</option>
            <option value="pink">Pink</option>
          </select>
        </div>

        <button className='save-note-btn' onClick={updateNote}>Edit Note</button>
      </div>
    </div>
  )
}
