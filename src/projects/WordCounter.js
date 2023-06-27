import {useState} from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close'
import '../styles/wordcounter.css'

function WordCounter() {
    const [state, setState] = useState({
      wordCount: 0, 
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
      });
    }
    
    return(
        <div >
            <div className="d-flex justify-content-end me-3" >
                <Link to='/projects'><CloseIcon style={{fontSize:'50px', color:'red'}} /></Link>
                
            </div>
            <h2 className='mb-5 text-center'>WORD COUNTER</h2>
            
            <p className='count '>Word Count: 
                <span className='num'> {state.wordCount}</span> 
            </p>

            <div className=' d-flex justify-content-center text-center'>
            <div className='notepad'>
              <div className='top'></div>
                <textarea className='paper p-2'  placeholder='Type here'onChange={handleKeyPress}></textarea>
            </div>
            </div>
      </div>
    );
  }
  
  export default WordCounter;