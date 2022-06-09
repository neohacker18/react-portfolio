import React from 'react'
import '../App.css'
import {useState,useEffect} from 'react'

const Home = () => {
    const nameStyle={
        color:'#64ffda',
        fontSize:'5.5rem'
    };
    const fonthelp={
      fontSize:'5.5rem'
    }
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds=>seconds+1)
        }, 900);
        return () => clearInterval(interval);
    }, []);

    return (
    <div>
        <div className="d-flex flex-column text-left" style={{width:'50%',position:'absolute',top:'25%',left:'10%'}}>
      <div className="p-2 vertical">
          <span style={fonthelp}>hi,</span>
          <span style={nameStyle}> aryan</span> 
          <span style={fonthelp}> here.</span>
          {/* {seconds%2===0?<span className="blinking-cursor">|</span >:<span className="disappeared-cursor">|</span>} */}
          <span style={nameStyle}>{seconds%2===0?'|':''}</span>
        </div>
        <div className="p-2">
            <p className="text-start" style={{color:'#8892b0',fontSize:'1.4rem'}}>I'm a computer science student based in Delhi, India. I have great interest in Fullstack Development, competitive programming and everything in between.</p>
        </div>
        <a href="mailto:aryan.sethi18@gmail.com">
        <button type="button" className="btn btn-secondary" style={{width:'24%',fontSize:'1.5rem'}}>Say Hi!</button>
        </a>
      </div>
    </div>
  )
}

export default Home