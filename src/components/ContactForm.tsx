import React from 'react'
import {FaWhatsapp, FaEnvelope, FaLinkedin, FaTwitter} from 'react-icons/fa'
const ContactForm = () => {
  return (
  <form className='form'>
    <h1>Contact Me</h1>
    <div className='form-contact'>
    <div className='center'>
     <h2>Available on <a href="https://wa.me/03412322685" target='_blank' rel="noopener noreferrer" className="social-link"><FaWhatsapp/></a></h2>
    </div>
    <div className='center'>
      <h2>Gmail Me<a href="mailto:heliomedia555@gmail.com" target='_blank' rel="noopener noreferrer" className="social-link"><FaEnvelope /></a></h2>
    </div>
    <div className='center'>
      <h2>Socials<a href="https://www.linkedin.com/in/saad-aslam-2167a32bb/" target='_blank' rel="noopener noreferrer"className="social-link"><FaLinkedin/></a><a href="https://www.linkedin.com/in/saad-aslam-2167a32bb/" target='_blank' rel="noopener noreferrer" className="social-link"><FaTwitter/></a></h2>
    </div>
    </div>
    <div className='btns'>
    <button className='button1'>
     <a href="https://wa.me/03412322685" rel="noopener noreferrer" target='_blank'>  Send Message</a>
    </button>
    <button className='button2'>
      <a href="https://milestone-1-delta-cyan.vercel.app/" rel="noopener noreferrer" target='_blank'>View Resume</a>
    </button>
    </div>
  </form>

)
}

export default ContactForm