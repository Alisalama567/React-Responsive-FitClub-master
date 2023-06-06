import React from 'react'
import './Footer.css'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
      <hr></hr>
      <div className="footer">
      <div className="webs">
       <a href="https://github.com/Alisalama567">
       <img src={github} alt="" srcset="" />
       </a> 
       <a href="https://www.instagram.com/accounts/login/?hl=ar">
      <img  src={Instagram} alt="" srcset="" />
      </a>
        <a href='https://www.linkedin.com/in/ali-salama-a1b894250/'>
        <img src={Linkedin} alt="" srcset="" />
        </a>
      </div>

     <div className='footer-logo'>
        <img src={logo} alt="" srcset="" />
     </div>
     </div>
     <div className="blur footer-blur1"></div>
     <div className="blur footer-blur2"></div>
    </div>
  )
}

export default Footer
