import React from 'react'
import Note from './Note'

export default function NotesList({ notes }) {

  notes.map((note) => {
    console.log("colour: " + note.background_colour)
  })
  return (
    <div className='notes-list'>
        {notes.map((note) => (
          <Note id={note.id} note_text={note.note_text} background_colour={note.background_colour}/>
        ))}
    </div>
  )
}
