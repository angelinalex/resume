import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [text, setText] = useState("");
    const fullText = "Hello! I'm Angelina. Developer and Musician. ";

    useEffect(() => {
        const timer = setInterval(() => {
            setText((prevText) => {
                return fullText.substr(0, prevText.length + 1);
            });
        }, 100); // adjust timing here

        // cleanup function
        return () => clearInterval(timer);
    }, []); // run once on component mount

    return (
        <div className='home-container'>  
            <div className='text-container'>  
                <p1>{text}</p1>  
            </div>


            <div className='fake_code'>
                
    <p className='code'>
        <span className='variable'>name</span> = "<span className='string'>Angelina Joy</span>";<br /><br />
        <span className='variable'>location</span> = "<span className='string'>New Brunswick, NJ </span>";<br /><br />
        <span className='variable'>email</span> = "<a href='mailto:aaj101@scarletmail.rutgers.edu' className='string'>aaj101@scarletmail.rutgers.edu</a>"; <span className='comment'> /** Click here **/ </span>
 <br /><br />
        <span className='variable'>education.University</span> = "<span className='string'>Rutgers University</span>";<br /><br />
        <span className='variable'>education.Major</span> = "<span className='string'>Computer Science B.S.</span>";<br /><br />
        <span className='variable'>education.Minor</span> = "<span className='string'>Music Technology</span>";<br /><br />
        <span className='variable'>education.Skills</span> = ["<span className='string'>React</span>", "<span className='string'>JavaScript</span>", "<span className='string'>Python</span>", "<span className='string'>Java</span>", "<span className='string'>mySQL</span>", "<span className='string'>Pandas</span>" , "<span className='string'>NumPy</span>" ];
        <br />
        <br />
        <span className='variable'>hobbies</span> = ["<span className='string'> Songwriting</span>", "<span className='string'>Music Production</span>", "<span className='string'> Hiking </span>", "<span className='string'>Peloton</span>", "<span className='string'>Meditation</span>" ];
        <br />
        <br />
        <span className='variable'>languages</span> = ["<span className='string'> English</span>", "<span className='string'> Russian</span>"];
    </p>
</div>
        </div>

    )
}

export default Home;
