import './App.css';
import './styles/colorpicker.css'
import{HashRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AgeCalculator from './projects/AgeCalculator';
import WordCounter from './projects/WordCounter';
import DummyJson from './projects/DummyJson';
import Calc from './projects/Calculator';
import Main from './projects/Main';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/experience' element={<Experience/>} />
           <Route path='/projects' element={<Projects/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/projects/agecalculator' element={<AgeCalculator/>} />
           <Route path='/projects/wordcounter' element={<WordCounter/>} />
           <Route path='/projects/dummyjson' element={<DummyJson/>} />
           <Route path='/projects/colorpicker' element={<Main/>} />
           <Route path='/projects/calculator' element={<Calc/>} />

        </Routes>
           
      </Router>
    </div>
  );
}

export default App;
