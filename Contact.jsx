import React from 'react'
import './Contact.css'
import insta from '../../assets/insta1.png'
import gmail from '../../assets/gmail.png'

const Contact = () => {
  return (
    <div className='contacts'>
        <a href='https://www.instagram.com/juniperb_23/' target="_blank">
            <img src={insta} alt="" />

        </a>
        <a href='https://mail.google.com/mail/?view=cm&to=juniperbrinegar@gmail.com' target="_blank">
            <img src={gmail} alt="" />

        </a>
      
    </div>
  )
}

export default Contact
