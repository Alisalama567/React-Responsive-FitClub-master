import React from 'react'
import './Programs.css'
import Plans from '../Plans/Plans'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='programs' id='programs'>
      <div className="programs-header">
        <span className='stroke'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke'>TO SHAPE YOU</span>
      </div>
      <div className="programs-cateogrey">
        {programsData.map((program)=>{
            const {image ,heading , details} = program
            return(
                <div className='category'>
            {image}
            <span>{heading}</span>
            <span>{details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt=""/>
            </div>
         </div>
            )
        })}
      </div>
    </div>
  )
}

export default Programs
