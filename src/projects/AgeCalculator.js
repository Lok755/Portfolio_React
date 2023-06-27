import { useState } from "react";
import {differenceInYears} from "date-fns";
import  CloseIcon  from '@material-ui/icons/Close'
import { Link } from "react-router-dom";
import '../styles/agecalculator.css'

function AgeCalculator(){
    const [birthDate, setBirthDate] = useState("")
    const [age, setAge] =useState('_');

    const handleChange = (e) => {
        setBirthDate(e.target.value);
               
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        calculate_age(birthDate);
    }

    const calculate_age = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate)
        const ageYears = differenceInYears(today, birthDateObj);
        console.log(ageYears);
        setAge(ageYears);
    }

    // function spanChange(){
    //     document.getElementById('result') = {age};
    // }

    return (
        <div>
            <div className="d-flex justify-content-end me-3" >
                <Link to='/projects'><CloseIcon style={{fontSize:'50px', color:'red'}} /></Link>
                
            </div>
        
            <div className="d-flex justify-content-center text-center">
                <div className="">
                <h2 className='mb-5 text-center'>AGE CALCULATOR</h2>
                <div className="date">
                    <p>Enter your date of birth</p>
                    <form onSubmit={handleSubmit}>
                        <input type="date" onChange={handleChange}></input><br />
                        <button className="age_calc my-4 btn btn-primary" type='submit'>calculate</button><br/>
                    </form>
                    
                    <p className="yearsold">Your are <span id='result' >{age}</span> year(s) old</p>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator;