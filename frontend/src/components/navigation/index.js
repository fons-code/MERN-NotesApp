import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default function Navigation() {
    return (
        <nav>
            <Link to='/'><div className="nav-logo">Notes app</div></Link> 
            <ul>
                <li><Link className="nav-link" to='/my-notes'>Notes</Link> </li>
                <li><Link className="nav-link" to='/create-note'>Create note</Link> </li>
            </ul>
        </nav>
    )
}
