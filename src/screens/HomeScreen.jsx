import React from "react";
import dev from "../Images/Developer.gif"
import Git from "../Images/GitHub-gif.gif"
import Linkedin from "../Images/Linkedin.gif"
import Right from "../Images/Right.gif"
import HTML from "../Images/HTML.png"
import CSS from "../Images/CSS.png"
import Javascript from "../Images/Javascript.png"
import rjs from "../Images/React.png"
import Nodejs from "../Images/Nodejs.png"
import Mongodb from "../Images/Mongodb.png"
import Express from "../Images/Express.png"
import Firebase from "../Images/Firebase.png"
// import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { BiArrowFromLeft } from "react-icons/bi";
// import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";


const HomeScreen = () => {

  return (
  <div className="wrapper pb bg">
    <img className="home-img" src={dev} alt="" />
    <div>
      <br/>
      <h1>MERN Developer 👋</h1>
      <p style={{textAlign:"justify"}}>Hello, I'm Ameya Kharate, a passionate MERN developer dedicated to creating innovative and user-friendly web applications, based in India, Maharashtra. 📍</p>

     <div className="home-responsive">
      <a href="https://github.com/kharateameya">
    <img style={{width:"50px", paddingRight: "20px", cursor:"pointer"}} src={Git} alt="GitHub-logo"/>
    </a>
    <a href=" https://www.linkedin.com/in/ameya-kharate-958828239">
    <img style={{width:"30px", cursor:"pointer"}} src={Linkedin} alt="Linkedin-logo"/>
    </a>
     </div>
    </div>
    <div>
    <br />
        <hr/>
        <br />
      <div>
       
     <h5 className="home-h stack">Tech Stack</h5>

    <div className="home-h">
      <img style={{width:"30px"}} className="tech-icon arrow" src={Right} alt="Right-arrow"/>
      <img className="tech-icon" src={HTML} alt="HTML"/>
      <img className="tech-icon" src={CSS} alt="CSS"/>
      <img className="tech-icon" src={Javascript} alt="Javascript"/>
      <img className="tech-icon" src={rjs} alt="React"/>
      <img className="tech-icon" src={Nodejs} alt="Nodejs"/>
      <img className="tech-icon" src={Express} alt="Express"/>
      <img className="tech-icon" src={Mongodb} alt="Mongodb"/>
      <img className="tech-icon" src={Firebase} alt="Firebase"/>
    </div>

     {/* <h6 className="home-h">
      <BiArrowFromLeft className="arrow-icon"/>
      <SiHtml5 className="tech-icon" cursor="pointer"/>
      <SiCss3 className="tech-icon" cursor="pointer"/>
      <SiJavascript className="tech-icon" cursor="pointer"/>
      <SiNodedotjs className="tech-icon" cursor="pointer"/>
      <SiReact className="tech-icon" cursor="pointer"/>
      <SiMongodb className="tech-icon" cursor="pointer"/>
      <SiExpress className="tech-icon" cursor="pointer"/>
      <SiFirebase className="tech-icon" cursor="pointer"/>

     </h6> */}
      </div>
    </div>
  </div>
  );
};

export default HomeScreen;
