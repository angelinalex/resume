import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './Home';
import Education from './Education';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <ul className='head'>
                    <h1> ANGELINA </h1>
                </ul>
                <ul className='navbar'>
                    <li>
                        <ScrollLink to="home" spy={true} smooth={true} duration={500}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="education" spy={true} smooth={true} duration={500}>Education</ScrollLink>
                    </li>
                    <li>
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

        </div>
    );
}

export default Navbar;
