import React from 'react'
import Gmail from "../Images/Gmail.gif"
import Linkedin from "../Images/Linkedin.gif"


const ContactScreen = () => {
  return (
    <div id='contact' className='wrapper'>
        
    {/* <img className="home-img" src={dev} alt="" /> */}
    <div className="text-box">
      <br/>
      <h1 style={{color: "purple"}} className='text'>Contact 💌</h1>
      <p className='text'>Don't be shy! hit me up!</p>
      <div className='contact pb-min'>
        <p> <img className='arrow' style={{width:"30px", marginBottom:"23px", margin:"10px"}} src={Gmail} alt="Gmail-icon" />
          kharate.ameyaa@gmail.com
        <br />
        <a href="https://www.linkedin.com/in/ameya-kharate-958828239">
        <img className='arrow' style={{width:"30px", marginBottom:"15px", margin:"10px", cursor:"pointer"}} src={Linkedin} alt="Linkedin-icon" />
          https://www.linkedin.com/in/ameya-kharate-958828239
          </a>
        </p>
      </div>
    <div>
        
    </div>
    </div>
    </div>
  )
}

export default ContactScreen