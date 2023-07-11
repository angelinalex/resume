import React from 'react';
import './Header.css';
import img from '../assets/ headerimg.png';


const Header = () => {


  return (
    <div className='container'>  
  
    <img src={img} className='image' alt="My Image" />

    </div>
  )



}

export default Header
  