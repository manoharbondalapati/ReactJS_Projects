import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import './NavBar.css';

const About = () => {
  return (
    <div className='container'>
     <div className='pentagon'>
       <img id='myimg2' src='https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709045311/wwm3qetbakfouq62qbjt.png' alt='myimg2'></img>
       <img id='myimg3' src='https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709043904/t8ersbeh7cvmbcrknjxb.png' alt='myimg3'></img>
     </div>
     <div id='contentdiv'>
     <h1> <span id='myname'>Manohar</span> Bondalapati</h1>
    <h2>Frontend Web Developer</h2>
     <p className='about'>A front-end developer builds the front-end portion of websites and web 
     applications the part users see and interact with. I work to make a better webstites is 
     responsible for creating good webstites<q>There are Three responses to piece of design-yes,no, and WOW,<span id='text'>WOW!</span> is one aim for me</q></p>
      <div className='my-icons'>
       <button><a href="https://www.facebook.com/"><TiSocialFacebook /></a></button>
       <button><a href='https://linkedin.com/in/manohar-bondalapati-806348217'><FaLinkedinIn /></a></button>
       <button><a href='https://github.com/manoharbondalapati'><FaGithub /></a></button>
       <button><a href='https://twitter.com/i/flow/login'><FaTwitter /></a></button>
      </div>
      <button id='cvbutton'>Download CV</button>
    </div>
   </div>
  )
}

export default About
//dmk