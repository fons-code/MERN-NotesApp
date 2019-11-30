import React from 'react'
import './card.css'

export default function noteCard(props) {
    return (
        <div className="card">
            <div className="card-header">
            <h3>{props.title}</h3>
            <div className="btn-section">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
            </div>
            <div className="card-body">
            <p>{props.content}</p>
            </div>
            <div className="card-footer">
            <div className="author"><p>By: {props.author}</p></div>
            <div className="date">{props.date}</div>
            </div>
        </div>
    )
}
