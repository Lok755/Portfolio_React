import React from 'react'
import Navbar from '../components/Navbar'

import '../styles/contact.css'
import CallIcon from '@material-ui/icons//Call';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
// import { Row,Col, Container } from 'react-bootstrap'


function Contact() {
  return (
    <div className='row d-flex justify-content-center'>
        <Navbar />

      <div className='head text-center my-4'><h1 className=' mt-3'>Get In Touch</h1><p className='mb-4'>Feel free to contact me</p></div>
      <div className='message row'>
        <div class='contact-me col '>
          <h3 className='mb-4'>Meesage me</h3>
          <form action='#' className='contact-form'>
            <div class="inputForContact row ">
              <div class="col mb-4">
                <input type="text" class="form-control" placeholder="Name" required/>
              </div>
              <div class="col mb-4">
                <input type="email" class="form-control" placeholder="Email" required/>
              </div>
            </div>
            <div class="col mb-4">
              <input type="text" class="form-control" placeholder="Subject" required/>
            </div>
            <div class="col mb-4">
              <textarea className='form-control w-100' rows='4' placeholder='Write your message' required></textarea>
            </div>
            <button className='sendbtn '>Send Message</button>
          </form>
        </div>
        
        <div className='contact-info col mb-auto'>
          <h3 className='mb-4'>Contact Info</h3>
          <div className='row' >
            <div className='col icons'>
              <PersonRoundedIcon className='mb-3' /><br /><br />
              <MailRoundedIcon className='mb-3'/><br /><br />
              <LocationOnRoundedIcon className='mb-3' /><br /><br />
              <CallIcon />
            </div>
            <div className='details-about-me col ' >
              <p><b>Name</b><br />Lokanathan</p>
              <p><b>Email Me</b><br />lokkrish755@gmail.com</p>
              <p><b>Location</b><br />20 Grand Taj Avenue, Vellore</p>
              <p><b>Call Me</b><br />9159878332</p>
            </div>
          </div>
          
          
          </div>

      </div>
    </div>

    
    
  )
}

export default Contact