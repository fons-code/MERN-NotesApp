import React, { Component } from 'react'
import './notes.css';
import NoteCard from './note-card'
import axios from 'axios'

export default class Notes extends Component {

    state={
        notes:[]
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({notes:res.data})
    }

    render() {
        return (
        <div className="notes-layout">
            <h1 className="notes-title">My notes</h1>
            <div className="notes-container"> 
              {this.state.notes.map(note => 
              <div className="notes-container-item">
                  <NoteCard 
                title={note.title}
                author={note.author}
                content={note.content}
                date={note.date}/>
              </div>
              )}
            </div>
        </div>
        )
    }
}
