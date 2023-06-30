import React from 'react'
import About from "../Images/About.png"


const AboutScreen = () => {
  return (
    <div id="about" className="wrapper pb">
     <div className='pb'>
    <div className="text-box">
      <br/>
      <h1 style={{color:"purple"}} className='pb-min text'>ABOUT ME</h1>
      <img className='about-img arrow' src={About} alt="about-img" />
      <div>
      <text className='about-head'>A passionate MERN developer based in India, Maharashtra. 📍</text>
      <p className='res-about' style={{textAlign:"justify"}}>My journey in web development began with a fascination for JavaScript and its endless possibilities. As I delved deeper into the MERN stack—leveraging React for building dynamic user interfaces, harnessing the power of Node.js for server-side logic, and seamlessly integrating with MongoDB for efficient data storage—I discovered a true passion for creating robust and scalable web applications.</p>

      </div>
    </div>
    </div>
  </div>
  )
}

export default AboutScreen;