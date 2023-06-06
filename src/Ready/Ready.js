import React , {useRef} from 'react'
import './Ready.css'
import emailjs from '@emailjs/browser'
const Ready = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_la9k9a9', 'template_pyvv9pr', form.current, '-nK9AftGd6uGTG6OR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="ready" id="ready-us">
    <div className="ready-l">
    <hr></hr>
    <span>
    <span className='stroke-text'>READY TO </span>
    <span style={{color:'white'}} >  LEVEL UP</span>
    </span>
    <span>
    <span style={{color:'white'}}>YOUR BODY
    </span>
    <span className='stroke-text'>   WITH US?</span>
    </span>
    
   </div> 
   <div className="ready-r">
    <form ref={form} className='email-container' onSubmit={sendEmail}>
        <input  type='email'  name="user_email"  placeholder='Enter your email adress' />
        <button type="submit">join now</button>
    </form>
   </div>
    </div>
  )
}

export default Ready
