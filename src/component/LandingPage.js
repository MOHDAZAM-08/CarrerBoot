import React from 'react'
import photo1 from '../img/pic3.png'
import Explore from './Explore'

export default function LandingPage() {
  return (
    <>
      <div className='landingpage'>
        <div className="heading">
          <h1>CarrerBoot</h1>
          <span>A career path is the journey an individual takes throughout their professional life. It includes the various stages of growth, learning, and development that one goes through while pursuing their chosen profession. </span>
          <br />

          <button className="btn btn-primary">Explore</button>
        </div>
        <div className="img">
          <img src={photo1} alt="photo" style={{ width: "500px" }} />
        </div>
      </div>
      <div className="box" style={{display:'flex',justifyContent:"center"}}>
        <div className="con">
          <h1 style={{fontWeight:"500"}}>Why We</h1>
          <h3 style={{paddingTop:"20px",paddingBottom:"40px"}}>"A career path is the journey an individual takes throughout their professional life"</h3>
          <h5>we are here to provide best content...</h5>
        </div>
        </div>
    </>
  )
}
