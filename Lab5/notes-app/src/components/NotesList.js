import React from 'react'
import Note from './Note'

export default function NotesList({ notes, deleteNotes }) {

  // notes.map((note) => {
  //   console.log("ID Noteslist.js: " + note.note_id)
  // })
  return (
    <div className='notes-list'>
        {notes.map((note) => (
          <Note note_id={note.note_id} 
          note_text={note.note_text} 
          background_colour={note.background_colour}
          deleteNotes={deleteNotes}/>
        ))}
    </div>
  )
}
