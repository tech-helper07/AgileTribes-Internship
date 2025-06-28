import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
    <h1>Contact Us</h1>
    <div className='contact-form'>
      <h3>Get in Touch</h3>
      <div className='form-container'>
        <input type="text" placeholder="Your Name" className='form-input' />
        <input type="email" placeholder="Your Email" className='form-input' />
        <textarea placeholder="Your Message" className='form-textarea'></textarea>
        <button type="button" className='submit-btn'>Send Message</button>
      </div>
    </div>
  </div>
  )
}

export default Contact;
