import React, { useState } from 'react'
import './Testimotss.css'
import {testimonialsData} from '../data/testimonialsData'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
const Testimouts = () => {

  const transation ={type: 'spring' , duration:3}

    const [select , selected]=useState(0)
    const tlenght = testimonialsData.length
    const next=()=>{
        if (select==tlenght-1 ) {
            selected(0)
        }else{
            selected((next)=>next+1)
        }
        
    }
    const reverse = ()=>{
        if (select==0 ) {
            selected(tlenght-1)
        }else{
            selected((next)=>next-1)
        }

    } 
  return (
    
    <div className='testimonals' id='testimonals'>
      <div className="left1-l">
      <span>testimonals</span>
      <span className='stroke-text'>WHAT THEY</span>
      <span>SAY ABOUT US</span>
      <motion.span
      key={select}
      initial={{opacity:0 , x :-100}}
      whileInView={{opacity:1 , x : 1}}
      exit={{opacity : 0 , x:-100}}
      transition={{...transation , duration : 2}}
      >
      {testimonialsData[select].review}
      </motion.span>
      <span>
      <span style={{color:'var(--orange)'}} >
        {testimonialsData[select].name}
      </span>{""}
      -{testimonialsData[0].status}
      </span>
      </div>
      <div className="right1-r">
      <motion.div
       initial ={{opacity :0 , x : -100}}
    animate={{opacity :1 , x : 0}}
    transition={{...transation , duration : 2}}
      ></motion.div>

      <motion.div
       initial ={{opacity :0 , x : 100}}
    whileInView={{opacity :1 , x : 0}}
    transition={{...transation , duration : 2}}
      ></motion.div>

        <motion.img
        key={select}
         initial ={{opacity :0 , x : 100}}
    whileInView={{opacity :1 , x : 0}}
    exit={{opacity : 0 , x:-100}}
    transition={{...transation , duration : 1}}
         src={testimonialsData[select].image} alt="" />

        <div className="arrow">
            <img
           onClick={reverse}
             src={leftArrow} alt="" srcset="" />
            <img 
            onClick={next}
            src={rightArrow} alt="" srcset="" />
        </div>
      </div>
    </div>


  )
}

export default Testimouts
