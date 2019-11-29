import React from 'react'
import './card.css'

export default function noteCard(props) {
    return (
        <div className="card">
            <div className="card-header">
            <h3>{props.title}</h3>
            </div>
            <div className="card-body">
            <p>{props.content}</p>
            </div>
            <div className="card-footer">
            <div className="author">{props.author}</div>
            <div className="date">{props.date}</div>
            </div>
        </div>
    )
}
