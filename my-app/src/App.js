import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Footer from './Components/Footer';
import { Element } from 'react-scroll';


function App() {
    return (
        <div className='components'>
            <Navbar /> 
     
            <Element name ="home">  
            <Header/>
            </Element>

            <Home/>

            <Element name = "education">
            <Education/> 

            </Element>


           <Footer/> 

        </div>
        
    );
}

export default App;
