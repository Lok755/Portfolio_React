import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import agecalc from '../assets/agecalc.png'
import wordcounter from '../assets/wordcounter.png'
import dummyjson from '../assets/dummyjson.png'
import calc from '../assets/calc.png'
import colorpick from '../assets/color.png'
import '../styles/projects.css'

function Projects() {
  
  return (
    <div >
        

    <div className='row justify-content-center' >
    <Navbar />
      <div className='head text-center my-2'><h1 className='text-center mt-3'>Projects</h1><p className='mb-4'>Give a visit to my projects</p></div>
    </div>
    <div className='forPCView'>
      <div className=' projectcards row d-flex justify-content-center'>
        <div class="card pt-2 my-4 mx-5 col-3 " style={{maxWidth:"35vh" ,minHeight:'33vh'}}>
        <Link to='/projects/agecalculator' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={agecalc} alt="Age calculator" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center">AGE CALCULATOR</h4>
          </div></Link>
        </div>

        <div class="card pt-2 my-4 mx-5 col-3" style={{maxWidth:"35vh" ,minHeight:'30vh'}}>
        <Link to='/projects/wordcounter' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={wordcounter} alt="Word counter" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center" style={{textDecoration:'none'}}>WORD COUNTER</h4>
          </div></Link> 
        </div>

        <div class="card pt-2 my-4 mx-5 col-3" style={{maxWidth:"35vh" ,minHeight:'30vh'}}>
        <Link to='/projects/dummyjson' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={dummyjson} alt="dummy json" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center ">DUMMY JSON</h4>
          </div></Link>
        </div><div class="w-100"></div>


        <div class="card pt-2 my-5 mx-5 col-3" style={{maxWidth:"35vh" ,minHeight:'30vh'}}>
        <Link to='/projects/calculator' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em" ,maxWidth:'15em'}} src={calc} alt="calculator" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center" >CALCULATOR</h4>
          </div></Link>
        </div>
        <div class="card pt-2 my-5 mx-3 col-3" style={{maxWidth:"35vh" ,minHeight:'30vh'}}>
        <Link to='/projects/colorpicker' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={colorpick} alt="color picker" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center">COLOR PICKER</h4>
          </div></Link>
        </div>
      </div>
    </div>

    {/* --------------------------------------------------------------------- */}
    <div className='forMobileView'>
      <div className=' projectcards row d-flex justify-content-center'>
        <div class="card pt-2 my-4 mx-5 " style={{maxWidth:"30vh" ,maxHeight:'38vh'}}>
        <Link to='/projects/agecalculator' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={agecalc} alt="Age calculator" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center">AGE CALCULATOR</h4>
          </div></Link>
        </div>

        <div class="card pt-2 my-4 mx-5 " style={{maxWidth:"30vh" ,maxHeight:'38vh'}}>
        <Link to='/projects/wordcounter' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={wordcounter} alt="Word counter" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center" style={{textDecoration:'none'}}>WORD COUNTER</h4>
          </div></Link> 
        </div>

        <div class="card pt-2 my-4 mx-5 " style={{maxWidth:"30vh" ,maxHeight:'38vh'}} >
        <Link to='/projects/dummyjson' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em"}} src={dummyjson} alt="dummy json" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center ">DUMMY JSON</h4>
          </div></Link>
        </div><div class="w-100"></div>


        <div class="card pt-2 my-4 mx-5 " style={{maxWidth:"30vh" ,maxHeight:'38vh'}} >
        <Link to='/projects/calculator' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em" ,maxWidth:'14em'}} src={calc} alt="calculator" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center" >CALCULATOR</h4>
          </div></Link>
        </div>
        <div class="card pt-2 my-4 mx-3 " style={{maxWidth:"30vh" ,maxHeight:'38vh'}}>
        <Link to='/projects/colorpicker' style={{textDecoration:'none'}}>
          <img class="card-img-top" style={{maxHeight:"12em",maxWidth:'15em'}} src={colorpick} alt="color picker" />
          <div class="card-body w-100">
            <h4 class="card-title text-dark text-center">COLOR PICKER</h4>
          </div></Link>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Projects