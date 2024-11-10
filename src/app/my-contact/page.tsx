import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div 
    className='contact-container'>
     <div className='contact-content'>
      <div className='contact'>
         <ContactForm/>
      </div>
     </div>
    </div>
  )
}

export default page