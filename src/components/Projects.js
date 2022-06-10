import React from 'react'
import image1 from '../img/prod.png'
import image2 from '../img/covidTracker.png'
import image3 from '../img/textutils.png'
import image4 from '../img/shoot1.png'
import image5 from '../img/git.png'
import image6 from '../img/dance.png'
import { Leetcode,Github,Linkedin} from '@icons-pack/react-simple-icons';

const Projects = () => {
  const myStyle = {
    fontSize: '0.8rem',
    color: '#64ffda'
  }
  
  return (
    <div>
      <div className="d-flex flex-column text-left" style={{height:'100%', width: '70%', position: 'absolute', left: '25%' }}>
        <div className="p-2 my-3">
          <h1 style={{ fontSize: '5.5rem' }}>/projects</h1>
        </div>
        <div id="caro" className="p-2" style={{ width: '65%' }}>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ borderRadius: '30px' }}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 caro-image" src={image1} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20}/></a>
                  <h5>ThreeJS</h5>
                  <p>A 3d web-project with added hover effect, orbit control and a gui to control the segment.</p>
                  <h5 style={myStyle}>Javascript (THREEJS)</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image2} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20}/></a>
                  <h5>Covid Tracker</h5>
                  <p>A web-application that provides visual data for covid patients.</p>
                  <h5 style={myStyle}>Javascript (MapBox)</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20}/></a>
                  <h5>TextUtils</h5>
                  <p>A utility application that helps in text manipulation and satisfies other document related queries.</p>
                  <h5 style={myStyle}>React.js</h5>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column" style={{ width: '70%', position: 'absolute', top: '90%', left: '15%' }}>
        <div class="card mb-3 project-box">
          <div class="card-deck">
            <div class="card card-1">
              <img src={image4} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-description">Shooter Game</p>
                <h5 className="card-techstack">C++ (SFML)</h5>
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20} className="icons"/></a>
              </div>
            </div>
            <div class="card card-2">
              <img src={image1} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-description">Notebook</p>
                <h5 className="card-techstack">ReactJS/MongoDB</h5>
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20}  className="icons"/></a>
              </div>
            </div>
            <div class="card card-3">
              <img src={image6} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-description">Dance Academy</p>
                <h5 className="card-techstack">Express (pug)</h5>
                <a className="links" href="https://github.com/neohacker18" ><Github color="#64ffda" size={20} className="icons"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects