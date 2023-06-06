import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type'
const Hero = () => {
    const transation ={type: 'spring' , duration:6}
    const mobile =window.innerWidth<=768 ? true : false ;
  return (
    <div className='hero' id='home'>
    <div className="blur hero-blur"></div>
    <div className="left-h">
    <Header />

    {/* {the-best-ad} */}
    <div className='the-best-ad'>
    <motion.div
    initial ={{left:mobile ? "165" : '238'}}
    whileInView={{left:'9px'}}
    transition={transation}
    >
        
    </motion.div>
        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
    </div> 


{/* header-heading */}
    <div className="hero-text">
        <div className=''>
            <span className='stroke-text'>Shape</span> 
            <span>Your</span>
        </div>
        <div>
            <span>Ideal body</span>
        </div>
        <div>
        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
       </div>
    </div>
    {/* figures */}
    <div className="figures">
        <div>
            <span>
                <NumberCounter end={140} start={100} delay='3' preFix="+" />
            </span>
            <span>EXPERT COACHES</span>
        </div>

        <div>
        <span>
                <NumberCounter end={879} start={800} delay='3' preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
        </div>
        <div>
        <span>
                <NumberCounter end={50} start={10} delay='3' preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
        </div>
    </div>
      {/* hero-button */}
      <div className='hero-button'>
            <button className='btn'>Get Start</button>
            <button className='btn'>Learn More</button>
 
        </div>
    </div>
    <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
         initial ={{right:'0px'}}
    whileInView={{left:'180px'}}
    transition={{type: 'spring' , duration:3}}
        className='heart-rate'>
            <img src={Heart} alt='' />
            <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
    
        {/* hero-image */}
        <motion.img 
            initial ={{right:'11rem'}}
        whileInView={{right:'20rem'}}
         transition={{type: 'spring' , duration:3}}
       src={hero_image_back}  alt="" className="hero-image-back"/>
       
        <img  src={hero_image}  alt="" className="hero-image"/>

        {/* calores */}
       <motion.div 
       initial={{right:'30rem'}}
       whileInView={{left:'-15rem'}}
       transition={{type: 'spring' , duration:3}}
       className="calories">
        <img src={Calories} alt=''/>
        <div>
            <span>Calories burned</span>
            <span>220 kcol</span>
        </div>
       </motion.div>
    </div>
    </div>
  )
}

export default Hero
