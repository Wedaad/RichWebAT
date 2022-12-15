import React from 'react'
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

export default function Note() {
  return (
    <div className='post-it-note'>
      <span className='note-text'>Note text</span>

      <div className='note-icons'>
        <MdDeleteForever className='delete-icon'/>
        <MdModeEdit className='edit-icon'/>

      </div>
    </div>
  )
}
