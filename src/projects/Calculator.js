import {useState} from 'react';
import '../styles/calculator.css'
import { Link } from "react-router-dom";
import  CloseIcon  from '@material-ui/icons/Close'
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';


function Calc(){
    const [result, setResult] = useState("");
    const [tempRes, settempRes] = useState("");

    const handleClick = (e) => {
        
        setResult(result.concat(e.target.id));
      }

    const calculate = () => {
        try{
        setResult(eval(result).toString())

        }
        catch(err){
            setResult('Error')
        }
    }

    const clearAll = () => {
        setResult('');
    }

    const backspace = () => {
        setResult(result.slice(0, result.length-1));
    }

    // let history = document.getElementById('history');
    // function calculation(v){
    //     let para = document.createElement('p');
    //     let data = v+'='+eval(v);
    //     para.innerText = data;
    //     history.appendChild(para)
    //     return eval(v);
    // }

    return(
        <div>
            <div className="d-flex justify-content-end me-3" >
                <Link to='/projects'><CloseIcon style={{fontSize:'50px', color:'red'}} /></Link>
            </div>
            <h2 className='mb-5 text-center'>SIMPLE CALCULATOR</h2>
    
        <div className='calculator-section'>
            <div className='input-section'>
                <input className='input-calc' type='text' name='txt' value={result}></input><br/>
            </div>
            <div class="grid-container">
                <button class="grid-item allclear" onClick={clearAll}>AC</button>
                <button class="grid-item" onClick={backspace}>C</button>
                <button class="grid-item" id='/' onClick={handleClick}>/</button>

                <button class="grid-item" id='1' onClick={handleClick}>1</button>
                <button class="grid-item" id='2' onClick={handleClick}>2</button>
                <button class="grid-item" id='3' onClick={handleClick}>3</button>  
                <button class="grid-item" id='*' onClick={handleClick}>*</button>
                
                <button class="grid-item" id='4' onClick={handleClick}>4</button>
                <button class="grid-item" id='5' onClick={handleClick}>5</button>
                <button class="grid-item" id='6' onClick={handleClick}>6</button> 
                <button class="grid-item" id='+' onClick={handleClick}>+</button>

                <button class="grid-item" id='7' onClick={handleClick}>7</button>
                <button class="grid-item" id='8' onClick={handleClick}>8</button>
                <button class="grid-item" id='9' onClick={handleClick}>9</button>  
                <button class="grid-item" id='-' onClick={handleClick}>-</button>
                
                <button class="grid-item" id='0' onClick={handleClick}>0</button>
                <button class="grid-item" id='.' onClick={handleClick}>.</button>
                <button class="grid-item equal" onClick={calculate}>=</button>
            </div>
        </div>

        {/* <div id='history'>
            <h2>History</h2>
            <p>3+5 = 8</p>
        </div> */}

    </div>
    )
}

export default Calc;