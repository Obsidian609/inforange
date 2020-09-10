import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav () {
    return (
        <nav>
            <Link to='/'>
            <h1 className='title'>InfoRange</h1>
            </Link>
            <ul className='navlinks'>
                <Link to='./UpdatePosts'>
                    <li>Submit Post</li>
                </Link>
                <Link to='./'>
                <li>Search</li>
                </Link>
                <Link to='./'>
                <li>Next Stop</li>
                </Link>
                <Link to='./AboutMe'>
                <li>About Me</li>
                </Link>
            </ul>
            </nav>
            )
}

export default Nav