import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/pages/Home'
import Mainpart from './components/Mainpart';
import Vaccines from './components/Vaccines'
import Tiles from './components/Tiles'
import Symptoms from './components/Symptoms';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <>
        <Router>
            <Navbar />
            
        <Routes>
               <Route exact path='/' element = {<Home />} />  
               <Route exact path='/mainpart' element = {<Mainpart />} />  
               <Route exact path='/tiles' element = {<Tiles />} />  
               <Route exact path='/vaccines' element = {<Vaccines />} /> 
               <Route exact path='/symptoms' element = {<Symptoms />} /> 

        </Routes>
           
           <Footer />
        </Router> 
     
        
      </>
   
  );
}

export default App;
