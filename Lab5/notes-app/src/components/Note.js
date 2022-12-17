import React from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

export default function Note({note_id, note_text, background_colour, deleteNotes, displayEdit, editCurrentNote}) {

  const mangeEdit =  () => {
    displayEdit(note_id)

  }

  return (
    <div className='post-it-note' style={{backgroundColor: background_colour}}>
      <span id='post-it-text' className='note-text'>{note_text}</span>

      <div className='note-icons'>
        <MdDeleteForever onClick={()=> deleteNotes(note_id)} className='delete-icon'/>
        <MdModeEdit onClick={mangeEdit} className='edit-icon'/>
      </div>
    </div>
  )
}
