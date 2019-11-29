import React from 'react'
import './card.css'

export default function noteCard() {
    return (
        <div className="card">
            <div className="card-header">
            <h3>title</h3>
            </div>
            <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel ratione fugiat placeat quidem aliquid?</p>
            </div>
            <div className="card-footer">
            <div className="author">autor</div>
            <div className="date">january 09</div>
            </div>
        </div>
    )
}
