import React from 'react'
import image1 from '../img/about.jpeg'
const About = () => {
    const nameStyle={
        color:'#64ffda'
    };
    const tech={
        color:'#64ffda'
    };
    
    const imgStyle={
        width:'27%',
        position:'absolute',
        top:'20%',
        left:'58%',
        borderRadius:'40px',
        border:'2px solid black',
    }
  return (
    <div>
        <div className="d-flex justify-content-start">
        <div className="d-flex flex-column text-left" style={{width:'50%',position:'absolute',top:'25%',left:'10%'}}>
      <div className="p-2">
          <h1 style={{fontSize:'5.5rem'}}>/about me</h1>
        </div>
        <div className="p-2">
            <p style={{color:'#8892b0',fontSize:'1.4rem'}}>I am currently a second year <span style={nameStyle}>Computer Science major at Maharaja Institute of Technology</span>.</p>
            <h5> Here are some technologies I have been working with:</h5>
        <div className="d-flex justify-content-start">
            <div className="d-flex flex-column">
                <div className="p-2" style={tech}>C/C++</div>
                <div className="p-2" style={tech}>MongoDB</div>
                <div className="p-2" style={tech}>ThreeJS</div>
            </div>
            <div className="d-flex flex-column mx-5">
                <div className="p-2" style={tech}>Javascript</div>
                <div className="p-2" style={tech}>React.js</div>
                <div className="p-2" style={tech}>Node.js</div>
            </div>
        </div>
            <p className='my-3' style={{color:'#8892b0',fontSize:'1.4rem'}}>Outside of work, Problem solving is my favorite hobby. I have solved over 500 problems on Leetcode, Codeforces and other websites.</p>
        </div>
        </div>
        <div className="d-flex flex-column">
            <img src={image1} alt="" style={imgStyle}/>
        </div>
        </div>
      </div>
  )
}

export default About