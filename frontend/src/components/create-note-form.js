import React from 'react'
import './createNote.css'

export default function createNoteForm(props) {
    return (
        <div className="create-form-container">
            <form className="create-note-form" >
            <h1>Create a note</h1>
            <input type="text" name="title" id="title" placeholder="Title" value={props.form.title} onChange={props.change}/>
            <input type="text" name="author" id="author" placeholder="Author" onChange={props.change}/>
            <textarea id="content" name="content" placeholder="Content" onChange={props.change}></textarea>
            <input type="date" name="date" id="date" onChange={props.change}/>
            <input type="button" value="Create" onClick={props.click}/>
            </form>
        </div>
        
    )
}
