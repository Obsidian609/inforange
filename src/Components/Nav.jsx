import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }

    return (
        <nav>
            <Link style={navStyle} to='/'>
            <h1 className='title'>InfoRange</h1>
            </Link>
            <ul className='navlinks'>
                <Link style={navStyle} to='/createposts'>
                    <li>Create Post</li>
                </Link>
                    <li><a style={navStyle} href="http://randomfactgenerator.net/" target="_blank">Random Info</a></li>
                <Link style={navStyle} to='/aboutme'>
                    <li>About Me</li>
                </Link>
            </ul>
            </nav>
            )
}

export default Nav