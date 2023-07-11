import React from 'react';
import './Education.css';
import universityLogo from '../assets/rutgers.jpg';
import Tooltip from './Tooltip';

const Education = () => {
    const skills = ["Python", "JavaScript", "Java", "HTML", "CSS", "XML", "Pandas", "MatPlot", "TensorFlow", "NumPy", "React"];
    
  return (
    <div className='text-wrapper'>


        <div className='box-wrap'>   
      <h2 className="education-header">Education</h2>
      <hr />
      
      <div className="university-section">
        <img src={universityLogo} alt="University Logo" className="university-logo"/>
        <p className="university-info">
        <span className="university-name">Rutgers University</span>
          <br />
          May 2023<br />              
          GPA 3.5<br />  
          New Brunswick, NJ          
        </p>
      </div>

      <h3 className="courses-header">Relevant Coursework</h3>
      <ul className="courses-list">

        <li>
        <Tooltip text="Software Methodology" tooltipText=" CS213: Learned essential principles, techniques, tools, and methods used to develop large software programs in Java. These include object-oriented programming and design, Unified Modeling Language (UML), testing and debugging, using and documenting APIs, asynchronous (event-driven) programming in a Graphical Use Interface (GUI) framework, code maintenance and version management using CVS, software development using Eclipse, introduction to building software on mobile platforms, introduction to multithreading and network programming, object persistence."/></li>
        <br />
  <li><Tooltip text="Object Oriented Programming" tooltipText="GDEV242: Was introduced to the concepts and features of Object-Oriented Programming (OOP). Course topics include encapsulation, inheritance, polymorphism, classes and objects, arrays, abstract classes and methods, message passing and unit testing."/></li>
  <br />
  <li><Tooltip text="Introduction to Data Science" tooltipText="CS439: Covered topics needed to solve problems involving data, which includes preparation (collection and integration), characterization and presentation (information visualization), analysis (machine learning and data mining), and products (applications)."/></li>
  <br />
  <li><Tooltip text="Data Management for Data Science" tooltipText="CS210: Was introduced to knowledge and skills needed to acquire and curate real word data, to explore the data to discover patterns and distributions, and to manage large databases. Learned how to get datasets into database-ready form and do basic analysis of such datasets using relational databases and SQL, and NoSQL databases." /></li>
  <br />
  <li><Tooltip text="Principles of Data Management" tooltipText="CS336: Learned to describe and query various forms of information such as structured data in relational databases, unstructured text (IR), semi-structured data (XML, web), deductive knowledge. Conceptual modeling and schema design. Basics of database management system services (transactions, reliability, security, optimization). Advanced topics: finding patterns in data, information mapping and integration. "/></li>
  <br />
  <li><Tooltip text="Design & Analysis of Computer Algorithms" tooltipText="CS334: Learned methods for expressing and comparing complexity of algorithms: worst and average cases, lower bounds on algorithm classes, verification of correctness. Application of such analysis to variety of specific algorithms: searching, merging, sorting (including quick and heap internal and Fibonacci external sorts); graph problems (including connected components, shortest path, minimum spanning tree. and biconnected components); language problems (including string matching and parsing).
Consideration of a number of hard problems: knapsack, satisfiability, traveling salesman problems.
"/></li>
  <br />
  <li><Tooltip text="Data Structures" tooltipText="CS112: Course designed to investigate the essential properties of data structures and algorithms for operating on them; to use these structures as tools to assist algorithm design; to extend exposure to searching, sorting and hashing techniques."/></li>
  <br />
  <li><Tooltip text="Introduction to Imaging and Multimedia" tooltipText="CS334: Was introduced to fundamental techniques and concepts used in computational imaging and multimedia. Topics included binary image analysis, image filter design, video and audio processing."/></li>
  <br />
  <li><Tooltip text="Introduction to Deep Learning" tooltipText="CS462: The course objectives are to understand the principles of deep learning and its capabilities and to acquire practical skills to design, implement, and train practical deep learning systems. At the end of the course, students will have knowledge of the fundamentals of neural networks and modern deep learning. Included a semester long deep learning model project. "/></li>
  <br />
  <li><Tooltip text="Electroacoustic Instrument Design" tooltipText="MS470: Introduced skills in acoustic/electroacoustic musical instrument design, acoustics, and physical properties of materials, as well as design and construct electroacoustic musical instruments, developing skills in basic electronics, circuit design, sensors, electro-mechanical transduction, human-computer interaction, and interface design culminating with a performance featuring these invented instruments."/></li>
  <br />
  <li><Tooltip text="Web Development and Design" tooltipText="CISY225: This course provided the skills required to author standards based Web sites using the Hypertext Markup Language (HTML), Extensible Hypertext Markup Language (XHTML) and Cascading Style Sheets (CSS) specifications. HTML, XHTML, and CSS will be used to create effective Web pages accessible on a variety of computer platforms. Students will learn how to incorporate tables, forms, images, and video into Web pages and will be briefly introduced to dynamic page development via the JavaScript programming language.
"/></li>


       

      </ul>


      <h3 className="skills-header">Technical Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-box" key={index}>
                {skill}
              </div>
            ))}
          </div>



      </div>
    </div>
  )
}

export default Education;
