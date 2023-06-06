import React from 'react'
import './plans.css'
import '../programs/Programs.css'
import '../App.css'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container' id='plan'>
    <div className="blur blur-paln1"></div>
    <div className="blur blur-paln2"></div>

      <div className="programs-header">
      <span className='stroke-text'>READY TO START</span>
      <span>YOUR JOURNEY</span>
      <span className='stroke-text'>NOW WITHUS</span>
      </div>
      <div className="plans">
      {plansData.map((plan , i)=>{
        const {name , icon , price , features} = plan;
        return(
          <div className="plan" key={i}>
          {icon}
          <span>{name}</span>
          <span> $ {price}</span>
          <div className="features">
        {features.map((feature , i)=>{
          return(
            <div className="feature">
             <img src={whiteTick} alt={name} />
             <span key={i}>{feature} </span>
            </div>
          )
        })}
        </div>
        <div>
          <span>See more benfites -></span>
        </div>
        <button className='btn'>join now</button>
        </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Plans
