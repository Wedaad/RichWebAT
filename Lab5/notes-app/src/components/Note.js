import React from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

export default function Note({note_id, note_text, background_colour, deleteNotes}) {

  const EditNote = () => {
    
    console.log("Editing note!");

  }

  return (
    <div className='post-it-note' style={{backgroundColor: background_colour}}>
      <span className='note-text'>{note_text}</span>

      <div className='note-icons'>
        <MdDeleteForever onClick={()=> deleteNotes(note_id)} className='delete-icon'/>
        <MdModeEdit className='edit-icon' onClick={EditNote}/>
      </div>
    </div>
  )
}
