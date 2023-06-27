import React from 'react'
import Navbar from '../components/Navbar'
import me from '../assets/lok.jpg'
import  InstagramIcon  from '@material-ui/icons/Instagram'
import  LinkedInIcon  from '@material-ui/icons/LinkedIn'
import  GitHubIcon  from '@material-ui/icons/GitHub'
import  FacebookIcon  from '@material-ui/icons/Facebook'
import '../styles/experience.css'


function Experience() {
  return (
    <div >
        <Navbar />
      <div className='about-page'>
      <div class="head text-center my-4"><h1 class=" page-heading-about">About Me</h1><p class="mb-4">Get to know about me</p></div>

      <div className='for-about d-flex justify-content-center'>
        <div className='Photo'>
          <img className='Lok'src={me}  height='400rem'></img>
        </div>

        <div className='details mb-auto' >
          <div className='self mb-4'>
            <h4 className='mb-3'>Hello!</h4>
            <h4 className='brief mb-3'><b>I'm Lokanathan, a Web Developer, UI Designer and Photographer.</b></h4>
            <p className='write-me'>
              I am a person who passionate about learning new skills and enjoy using them by teaching and showcasing it via my opportunities.
              My goal is to become a Full-Stack Web Developer. I enjoy collaborating with like-minded individuals and organizations to create meaningful 
              solutions that make a difference.
            </p>
            <hr className='w-100'></hr>
          </div>

          <div className='reachme'>
            <div className='identity row'>
              <div className='col data'><b>Name:</b> &nbsp;Lokanathan</div>
              <div className='col data'><b>Email:</b> &nbsp;lokkrish755@gmail.com</div>
              <div className='w-100'></div>
              <div className='col data'><b>Age:</b>&nbsp; 21</div>
              <div className='col data'><b>From:</b>&nbsp; Vellore, TamilNadu</div>
              <div className='w-100'></div>
              <div className='mt-4 '>
                <button className='download-cv'>Download CV</button>
              </div>            
            </div>
          </div>
        </div>
      </div>
      <div className='my-skills'>
        <div className='head text-center my-4'><h1 className='mt-3'>MY SKILLS</h1></div>
        <div>
        <div class="skills_main">
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>HTML</p>
                    <p>90%</p>
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>CSS</p>
                    <p>85%</p>
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>PHP</p>
                    <p>80%</p>
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>Java Script</p>
                    <p>80%</p>
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>React js</p>
                    <p>75%</p>
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>Node js</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="node"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>Express js</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="express"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p className='skill-title'>Mongo DB</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="mongo"></span>
                </div>
            </div>
        </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Experience