import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import Note  from './Note';

export default function CreateNote({setIsShown}) {

  const SaveNote = () => {
    console.log("Note saved :)")
    
 
  }

  return (
    <div>
      <div className='create-note'>
        <MdClose className='close-btn' onClick={setIsShown}/>
        <div className='new-note-content'>
          <h2>Creating New Note</h2>
              <form>
                <textarea placeholder='Add new note content here...'></textarea>
              </form>
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

        <button className='save-note-btn' onClick={SaveNote}>Save Note</button>
      </div>
    </div>
  )
}
