import React from 'react'
import NoteForm from './create-note-form'
import './createLayout.css'


export default function createNote() {
    return (
        <div className="create-layout">
            <NoteForm/>
            <div className="create-preview">

            </div>
        </div>
    )
}
