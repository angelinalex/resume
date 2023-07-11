import React from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from "react-router-dom";
import Home from './Home';
import Education from './Education';
import './Navbar.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className='nav-container'>
                
                    <ul className = 'head'>
                

                    <h1> ANGELINA </h1>
    

                    </ul>

                    <ul className='navbar'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>  
                           <Link to= "/education"> Education </Link>
                        </li>
                        <li > 
                        <a href="https://www.linkedin.com/in/angelina-joy/" target="_blank" rel="noopener noreferrer">
                         <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                     <li>
                        <a href="https://github.com/angelinalex/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                     </a>
                    </li>
                    <li>
        <a href="mailto:aaj101@scarletmail.rutgers.edu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </li>


                    </ul>
                </nav>
                <Routes> 
                <Route path="/" exact component={Home} />
                <Route path="/education/" component={Education} />
                
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;

