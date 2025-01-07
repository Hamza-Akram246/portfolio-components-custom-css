import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
            <h2 className='contact-heading' data-aos="zoom-in-up"> Get in touch</h2>
            <p className='contact-text' data-aos="zoom-in-up">
                Drop me a line, give me call, or send me a message by submitting the forme.
            </p>
            <div className='contact-flex' data-aos="zoom-in-up">
                <AiOutlineMail size={30}/> hamzaakram442266@gmail.com
            </div>
            <div className='contact-flex' data-aos="zoom-in-up">
            <BsTelephone size={30}/> 031689516689
            </div>
        </div>
        <div className='contact-space'>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='input-field'
                id='name' />
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className='input-field'
                id='email' />
            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor="message">Message</label>
                <textarea
                className='input-field'
                id='message' rows={8} >
                </textarea>
            </div>
            <button className='button' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact