import React from 'react'
import NoteForm from './create-note-form'
import './createLayout.css'
import NoteCard from './note-card'

export default class createNote extends React.Component {
    
    state={form:{
        title : '',
        content:'',
        author:'',
        date:''
    }
    }
    handleClick= e =>{
        console.log('a button was clicked')
    }
    handleChange = e =>{
        const newForm = {form:
            {...this.state.form,
            [e.target.name]:[e.target.value]}    
        }
        this.setState(newForm, () => console.log(this.state))
     
    }
    render() {
        return (
            <div className="create-layout">
            <NoteForm click={this.handleClick} change={this.handleChange} form={this.state.form}/>
            <div className="create-preview">
                <h1 className="preview-title">Preview</h1>
                <NoteCard 
                    title={this.state.form.title}
                    content={this.state.form.content}
                    author={this.state.form.author}
                    date={this.state.form.date}/>
            </div>
            </div>
        )
    }
}
