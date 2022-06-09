import React from 'react'
import { Link } from 'react-router-dom'
const Navbox = () => {
    const linkStyle={
        fontSize:'1.1rem',
        padding:'2px',
        color: '#64ffda',
        textDecoration:'none',
        width:'20%'
    } 
  return (
    <div className="d-flex flex-column text-right position-fixed fixed-bottom" style={{width:'50%',position:'absolute',top:'74%',left:'85%'}}>
        <Link className="links" to="/" style={linkStyle}>/home</Link>
        <Link className="links" to="/about" style={linkStyle}>/about</Link>
        <Link className="links" to="/projects" style={linkStyle}>/projects</Link>
    </div>
  )
}

export default Navbox