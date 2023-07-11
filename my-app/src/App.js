import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Footer from './Components/Footer';


function App() {
    return (
        <div className='components'>
            <Navbar /> 
            <Header/>
            <Home/>
           <Education/> 
           <Footer/> 

        </div>
        
    );
}

export default App;
