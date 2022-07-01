import React from 'react'
import image1 from '../img/prod.png'
import image2 from '../img/covidTracker.png'
import image3 from '../img/textutils.png'
import image4 from '../img/shoot1.png'
import image5 from '../img/inotebook.png'
import image6 from '../img/dance.png'
import image7 from '../img/better-ide.png'
import image8 from '../img/messenger.png'
import { Github} from '@icons-pack/react-simple-icons';
const Projects = () => {
  const myStyle = {
    fontSize: '0.8rem',
    color: '#64ffda'
  }
  
  return (
    <div>
      <div id="proj" className="d-flex flex-column text-left projects-hero">
        <div className="p-2 my-3">
          <h1 id='projects-heading'>/projects</h1>
        </div>
        <div id="caro" className="p-2" >
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ borderRadius: '30px' }}>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image1} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18/threejs-background-scene" ><Github color="#64ffda" size={20}/></a>
                  <h5>ThreeJS</h5>
                  <p>A 3d web-project with added hover effect, orbit control and a gui to control the segment.</p>
                  <h5 style={myStyle}>Javascript (THREE.js)</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image5} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18/notebook" ><Github color="#64ffda" size={20}/></a>
                  <h5>Notebook</h5>
                  <p>A fullstack web-application to maintain your notes with added authentication facilities.</p>
                  <h5 style={myStyle}>React.js/MongoDB</h5>
                </div>
              </div>
              <div className="carousel-item active">
                <img className="d-block w-100 caro-image" src={image7} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18/" ><Github color="#64ffda" size={20}/></a>
                  <h5>better-ide.com</h5>
                  <p>An online facility to run your C++/Python codes on your web browser.</p>
                  <h5 style={myStyle}>Reactjs/Nodejs/Ace</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image8} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18/messenger" ><Github color="#64ffda" size={20}/></a>
                  <h5>Messenger</h5>
                  <p>A utility application that helps in text manipulation and satisfies other document related queries.</p>
                  <h5 style={myStyle}>React.js/Firebase</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 caro-image" src={image3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <a className="links" href="https://github.com/neohacker18/textutils" ><Github color="#64ffda" size={20}/></a>
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
        <div className="card mb-3 project-box">
          <div className="card-deck">
            <div className="card card-1">
              <img src={image4} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-description">Shooter Game</p>
                <h5 className="card-techstack">C++ (SFML)</h5>
                <a className="links" href="https://github.com/neohacker18/shootergame" ><Github color="#64ffda" size={20} className="icons"/></a>
              </div>
            </div>
            <div className="card card-2">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-description">Covid Tracker</p>
                <h5 className="card-techstack">Javascript (MapBox)</h5>
                <a className="links" href="https://github.com/neohacker18/covidTracker" ><Github color="#64ffda" size={20}  className="icons"/></a>
              </div>
            </div>
            <div className="card card-3">
              <img src={image6} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-description">Dance Academy</p>
                <h5 className="card-techstack">Express/MongoDB</h5>
                <a className="links" href="https://github.com/neohacker18/Dance-Website" ><Github color="#64ffda" size={20} className="icons"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects