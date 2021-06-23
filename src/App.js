import React from "react"
import './App.css';
import image from "./header.jpg"
import Aboutimage from "./read.png"
import cpp from "./c++.png"
import nodejs  from "./nodejs.png"
import python  from "./python.png"
import html  from "./html.png"
import reactjs from "./Reactjs.png"
import js  from "./js.png"
import css  from "./css.png"
import Project from "./project1.png"
import Ach from "./ach1.jpg"
import contact from "./contact.jpg"
import mob from "./1.png"
import email from "./2.webp"
import linkdin  from "./3.png"
import git  from "./4.png"
import add  from "./5.png"
import   up  from "./up.jpg"
import ArrowDownwardIcon from "./images.png";
function App() {
  return (
    <div>
       <div id="HOME">
      <div className="stpage">
      <img src={image}  width="1518" height="719" alt="background_image"/>
    <div className="App">
    <div className="Link" > <a className="remove_underine" href="#Home">HOME</a></div> 
    <div className="Link" > <a className="remove_underine" href="#EDUCATION">EDUCATION</a></div>
    <div className="Link" > <a className="remove_underine" href="#Technical_Skills">SKILL </a></div>
    <div className="Link"> <a className="remove_underine" href="#Project">PROJECT</a></div>
    <div className="Link"> <a className="remove_underine" href="#ACHIEVMENT">ACHIEVEMENT</a></div>
    <div className="Link"> <a  className="remove_underine" href="#CONTACT">CONTACT</a></div>
    </div>
    </div>
    <div id="Home" className="home_article">
      <h1  style={{color:"skyblue"}}>Hey</h1>
      <h1  >I am Sashyat singh  </h1>
      <h2 >I am a FullStack Developer  & Competative programmer </h2>
      <h2>I like dabbling in various parts of frontend development and like to learn</h2>
      <h2> about new technologies, or simply play games in my free time.</h2>
      <div className="arrowdown">
      <a href ="#EDUCATION">
      <img src={ArrowDownwardIcon} 
      className="arrowstyle"
      alt="ff"  width="40px" ></img>
      </a>
      </div>
      </div>
      </div>
      <div  id="EDUCATION"className="aboutimage"   >
        <div  >
          <img src={Aboutimage} width="300" height="310" alt="dm" className="reading_image" ></img>
        </div>
    <div className="education" >
      <div className="eduheading">
      <p style={{fontSize:40}}><b>Education</b> </p>
      </div>
    
       <div>
         <div className="edudetail">
         <h1><b>
         B.tech in Electrical Engineering
         </b></h1>
         <h3><b>    NIT Kurukshetra cgpa 7.6(currently persuing),graduation year 2022</b></h3>
        <h1><b>Senior Secondary Examination class-XII</b></h1>
        <h3><b>
         Gaya College ,Gaya (bihar board)   ,      percentage:70%</b></h3>
       <h1><b>Higher Secondary Examination-Class X</b></h1>
       <h3><b>Al-Momin International School,gaya,cgpa:10</b></h3>
       </div>
       </div>
     </div>
     </div>
     <div className="technicalskill" id="Technical_Skills" >
       <div className="technical_heding">
         <p style={{fontSize:40}} ><b> Skills</b></p>
         </div>
         <div className="imagecontainer">
           <div className="firstcon">
         <div className="skillimage" >
         <img src={cpp} height="120px" alt="dhd"></img>
         </div>
         <div className="skillimage">
         <img src={python} height="120px" alt="dhd"></img>
         </div>
         <div className="skillimage">
         <img src={js} height="120px" alt="dhd"></img>
         </div>
         <div className="skillimage">
         <img src={reactjs} height="120px" alt="dhd"></img>
         </div>
         <br></br>
         </div>
         <div className="secondcon">
         
         <div className="skillimage">
         <img src={nodejs} height="110px" alt="dhd"></img>
         </div>
         <div className="skillimage">
         <img src={html} height="120px" alt="dhd"></img>
         </div>
         <div className="skillimage">
         <img src={css} height="120px" alt="dhd"></img>
         </div>
         
         </div>
         </div>
     </div>
        
     <div  id="Project"className="aboutimage"   >
        <div  >
          <img src={Project} width="300" height="310" alt="dm" className="reading_image" ></img>
        </div>
    <div className="education" >
      <div className="eduheading">
      <p style={{fontSize:40}}><b>Project</b> </p>
      </div>
       <div>
         <div className="edudetail">
         <h1><b>
         Resume website
         </b></h1>
         <h3><b>Described in detail about my academic carrier and my work</b></h3>
        <h1><b>
         Random Quotes generator
         </b></h1>
         <h3><b> used  dynamic api for quotes and generator new quotes when refreshed </b></h3>

        <h1><b>Object follower bot</b></h1>
        <h3> 
          <b>
         I uses Arduino, Web cam and bot ,designed a bot and programmed in 
         numpy library and embedded c. To follow any particular object.  
         </b></h3>
       <h1><b>
       Smart-home project  
       </b></h1>
       <h3><b>I used   Arduino and different sensors and module  to control  fans and led through  my phone</b></h3>
       </div>
       </div>
     </div>
     </div>
     <div  id="ACHIEVMENT"className="aboutimage"   >
        <div  >
          <img src={Ach} width="300" height="310" alt="dm" className="reading_image" ></img>
        </div>
    <div className="education" >
      <div className="eduheading">
      <p style={{fontSize:40}}><b>Achievment & Awards</b> </p>
      </div>
       <div>
         <div className="edudetail">
         <h1><b>
         Winner in EUREKA (circuit Design) in Techsperdha(Tech fest) 2018
         </b></h1>
        <h1><b>
         Winner in Town planning in Techsperdha(tech fest) 2019
         </b></h1>
        <h1><b>Runner up in Vidhwaan (Power system design) in Techsperdha( tech fest) 2019</b></h1>
       <h1><b>
       Represented NIT KURUKSHETRA in
       Supra 2019 held at NOIDA
       </b></h1>
       <h1><b>
         Codechef rating 1800 4 star 
       </b></h1>
       </div>
       </div>
     </div>
     </div>
     <div  id="CONTACT"className="aboutimage"   >
        <div  >
          <img src={contact} width="300" height="310" alt="dm" className="reading_image" ></img>
        </div>
    <div className="education" >
      <div className="eduheading">
      <p style={{fontSize:40}}><b>Contact Me</b> </p>
      </div>
       <div>
         <div className="edudetail">
         <h1> <b>
        <img src={mob} width="50" ></img>    +917320869235
         </b></h1>
        <h1><b> <img src={email} width="50" ></img>    
           sashyat_11814089@nitkkr.ac.in
         </b></h1>
        <h1><img src={linkdin} width="50" ></img> https://www.linkedin.com/in/sashyat-singh-789797204</h1>
       <h1><b>
       <img src={git} width="50" ></img> 
       github.com/sashyat4089
       </b></h1>
       <h1>
       <img src={add} width="50" ></img> 
         At- Itwan,
         Post- Roshanganj,
         Dist-Gaya(bihar),
         Pincode -824217
      </h1>
       </div>
       </div>
     </div>
    
     </div>
      <div className="down">
    <a href="#HOME"><img src={up} width="50" ></img> </a> 
     </div>
      </div>
  );
}
export default App;
