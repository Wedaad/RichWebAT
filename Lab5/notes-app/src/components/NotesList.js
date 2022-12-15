import React from 'react'
import Note from './Note'

export default function NotesList() {
  return (
    <div className='notes-list'>
        <h2>Your Created Notes: </h2>
        <Note/>
    </div>
  )
}
