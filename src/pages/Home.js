import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from 'typewriter-effect';
import '../styles/home.css'
import bgvideo from '../assets/bgvideo.mp4'


function Home() {


  return (
    <div className='home'>
      <video src={bgvideo} autoPlay muted loop className='video-bg' />
      <Navbar />
      <div className='intro'>
        <h1 className='name'> Hi, I'm <span className='name-color'>Lokanathan</span></h1>
        <h3 className='onloop d-flex justify-content-center'>I'm a 
        <span className='ms-2'>
          <Typewriter
            options={{
              strings: ['Developer', 'Designer','Photographer'],
              autoStart: true,
              loop: true,
            }}
          />
          </span>
        </h3>
      </div>
      <Footer />
    </div>
  )
}

export default Home;