import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <div style={linkContainer}>
                <Link style={linkStyle} to="/"><h3>Home</h3></Link> 
                <h3 style={linkStyle}>|</h3> 
                <Link style={linkStyle} to="/about"><h3>About</h3></Link>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkContainer = {
    display: 'inline-flex',
    textAlign: 'center',
}

const linkStyle = {
    marginInline: '10px',
    color: '#fff',
    textDecoration: 'none', 
}

export default Header;