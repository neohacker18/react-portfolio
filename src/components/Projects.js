import React from 'react'
import image1 from '../img/prod.png'
import image2 from '../img/covidTracker.png'
import image3 from '../img/textutils.png'
const Projects = () => {
  const myStyle = {
    fontSize: '0.8rem',
    color: '#64ffda'
  }
  return (
    <div>
      <div className="d-flex flex-column text-left" style={{ width: '70%', position: 'absolute', left: '25%' }}>
        <div className="p-2 my-3">
          <h1 style={{ fontSize: '5.5rem' }}>/projects</h1>
        </div>
        <div id="caro" className="p-2" style={{ width: '65%'}}>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{ borderRadius: '30px' }}>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={image1} alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>ThreeJS</h5>
                  <p>A 3d web-project with added hover effect, orbit control and a gui to control the segment.</p>
                  <h5 style={myStyle}>Javascript (THREEJS)</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={image2} alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Covid Tracker</h5>
                  <p>A web-application that provides visual data for covid patients.</p>
                  <h5 style={myStyle}>Javascript (MapBox)</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={image3} alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>TextUtils</h5>
                  <p>A utility application that helps in text manipulation and satisfies other document related queries.</p>
                  <h5 style={myStyle}>React.js</h5>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects