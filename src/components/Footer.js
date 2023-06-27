import React from 'react'
import '../styles/footer.css'
import  InstagramIcon  from '@material-ui/icons/Instagram'
import  LinkedInIcon  from '@material-ui/icons/LinkedIn'
import  GitHubIcon  from '@material-ui/icons/GitHub'
import  FacebookIcon  from '@material-ui/icons/Facebook'
import  EmailIcon  from '@material-ui/icons/Email'


function Footer() {
  return (
        <div class="footer ">
        
        <div className='social-media '>
                    <a href='https://instagram.com/_._lok_._?igshid=ZDc4ODBmNjlmNQ=='><InstagramIcon /></a> 
                    <a href='#'><FacebookIcon  /></a>
                    <a href='#'><LinkedInIcon /></a>
                    <a href='https://github.com/Lok755'><GitHubIcon /></a>
                </div>
        </div>
  )
}

export default Footer