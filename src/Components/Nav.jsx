import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    }
    const nav = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '10vh',
        background: 'rgb(2, 87, 2)',
        marginBottom: '15px',
    }
    const navLinks = {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
    }

    return (
        <nav style={nav}>
            <Link style={navStyle} to='/'>
            <h1>InfoRange</h1>
            </Link>
            <ul style={navLinks}>
                <Link style={navStyle} to='/createposts'>
                    <li>Create Post</li>
                </Link>
                    <li><a style={navStyle} rel="noopener noreferrer" href="http://randomfactgenerator.net/" target="_blank">Random Info</a></li>
                <Link style={navStyle} to='/aboutme'>
                    <li>About Me</li>
                </Link>
            </ul>
            </nav>
            )
}

export default Nav