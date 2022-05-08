import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../Styles/Contact.css'

export default function Contact() {
  return (
    <>
      <div className='contact-main-container'>
        <div className='contact-sub-container'>
          <div className='contact-left'>
            <h2>Get a Quote</h2>
            <p>Fill up the form and our team will get back to you within 24 hours</p>
            <div className='contact-info'>
              <div className='contact-sub-info'>
                <PhoneIcon sx={{ color: 'white', marginTop: '15px' }}/>
                <h4>+91 7007-475-550</h4>
              </div>
              <div className='contact-sub-info'>
                <MailIcon sx={{ color: 'white', marginTop: '15px' }}/>
                <h4>abdul.samadkirmani.samad63@gmail.com</h4>
              </div>
              <div className='contact-sub-info'>
                <LocationOnIcon sx={{ color: 'white', marginTop: '15px' }}/>
                <h4>Goolar naka banda (U.P) India</h4>
              </div>
            </div>
          </div>
        <div className='contact-right-container'>
          <label>Your Name</label>
          {/* <i><LocationOnIcon/></i> */}
          <input type='text'></input>
          <label>Mail</label>
          <input type='text'></input>
          <label>Message</label>
          <textarea type='text' rows="6" cols="43"></textarea>
          <button>send</button>
        </div>
        </div>
      </div>
    </>
  )
}
