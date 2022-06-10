import React from 'react'
import { Link } from 'react-router-dom'
import { Leetcode,Github,Linkedin} from '@icons-pack/react-simple-icons';

const Navbox = () => {
    const linkStyle={
        fontSize:'1.1rem',
        padding:'2px',
        color: '#64ffda',
        textDecoration:'none',
        width:'20%',
        fontWeight:'bolder'
    } 

  return (
    <div className="d-flex flex-column text-right position-fixed fixed-bottom" style={{width:'50%',position:'absolute',top:'64%',left:'87%'}}>
        <Link className="links" to="/" style={linkStyle}>/home</Link>
        <Link className="links" to="/about" style={linkStyle}>/about</Link>
        <Link className="links" to="/projects" style={linkStyle}>/projects</Link>
        <a className="links" href="https://github.com/neohacker18" style={linkStyle}><Github color="#64ffda" size={20}/></a>
        <a className="links" href="https://linkedin.com/in/aryan18" style={linkStyle}><Linkedin color="#64ffda" size={20}/></a>
        <a className="links" href="https://leetcode.com/neo_yuki/" style={linkStyle}><Leetcode color="#64ffda" size={20}/></a>
    </div>
  )
}

export default Navbox