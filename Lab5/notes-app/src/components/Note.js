import React from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

export default function Note({id, note_text, background_colour}) {

  const DeleteNote = () => {
    console.log("Note deleted!");

  }

  const EditNote = () => {
    
    console.log("Editing note!");

  }

  return (
    <div className='post-it-note' style={{backgroundColor: background_colour}}>
      <span className='note-text'>{note_text}</span>

      <div className='note-icons'>
        <MdDeleteForever className='delete-icon' onClick={DeleteNote}/>
        <MdModeEdit className='edit-icon' onClick={EditNote}/>
      </div>
    </div>
  )
}
