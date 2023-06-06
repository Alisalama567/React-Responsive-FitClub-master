import React, {useState} from 'react'
import './Header.css'
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {
  const mobile =window.innerWidth<=768 ? true : false ;
  const [menuopen ,  setmenuopen]=useState (false)

  return (
    <div className='header'>
      <img src={Logo}  alt='' 
      className='logo '
       />
      {(menuopen === false && mobile===true)?(
        <div
        style={{backgroundColor:'var(--appColor)' , 
        padding : '0.5rem',
         borderRadius:'5px',
         cursor:'pointer'
         }}
         onClick={()=>{setmenuopen(true)}}
        >
        <img src={Bars} alt=''
           style={{width :'1.5rem' , height : '1.5rem'}}
        />
        </div>
        ):
        (<ul className='header-menu'>
        <li >
        <Link
        onClick={()=>{setmenuopen(false)}}
        to ='home'
        span={true}
        smooth ={true}
        >
        Home
        </Link></li>        
        <li >
        <Link
        onClick={()=>{setmenuopen(false)}}
        to ='programs'
        span={true}
        smooth ={true}
        >
        Progress
        </Link></li>
        <li >
        <Link
        onClick={()=>{setmenuopen(false)}}
        to ='response'
        span={true}
        smooth ={true}
        >
        Why Use
        </Link></li>
        <li >
        <Link
        onClick={()=>{setmenuopen(false)}}
        to='plan'
        span={true}
        smooth={true}
        >
         plans
        </Link>
        </li>
        <li >
        <Link
        onClick={()=>{setmenuopen(false)}}
        to ='testimonals'
        span={true}
        smooth ={true}
        >
        Testimonalest
        </Link></li>

      </ul>
      )}
      
    </div>
  )
}

export default Header

