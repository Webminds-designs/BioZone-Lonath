import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/location.css';
import main2 from '../assets/wallpaper2.png';
import { motion } from 'framer-motion';

const Location = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [isVisible, setIsVisible] = useState(true); // Track visibility

  const handleDivClick = (path) => {
    setIsVisible(false); // Hide elements
    navigate(path); // Use navigate to change routes
  };

  return (
    <section id="section2">
      {isVisible && ( // Conditional rendering
        <div className="class-container">

          <motion.div 
          className="ism" 
          onClick={() => handleDivClick('/Ism')}
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          >
            <button className="bottom-left-btn">Click for more</button>
            <h1 className="classN">ISM</h1>
            <h1 className="classL">Nugegoda</h1>
          </motion.div>

          <motion.div 
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}} 
          className="shakthi" 
          onClick={() => handleDivClick('/Shakthi')}>
            <button className="bottom-left-btn">Click for more</button>
            <h1 className="classN sha">Shakthi</h1>
            <h1 className="classL">Bambalapitiya</h1>
          </motion.div>

          <motion.div 
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1}}
          className="sisulka" 
          onClick={() => handleDivClick('/Sisulka')}>
            <button className="bottom-left-btn">Click for more</button>
            <h1 className="classN">Sisulka</h1>
            <h1 className="classL">Rathnapura</h1>
          </motion.div>

          <motion.div 
                  initial={{opacity:0, x:50}}
                  whileInView={{opacity:1, x:0}}
                  transition={{duration:1}}
                  className="siyochem" onClick={() => handleDivClick('/Siyochem')}>
            <button className="bottom-left-btn">Click for more</button>
            <h1 className="classN">Siyochem</h1>
            <h1 className="classL">Nugegoda</h1>
        </motion.div>
        </div>
      )}

      {isVisible && (
        <img src={main2} alt="Dr. Charitha Munasinghe" className="location-background" />
      )}
      
    </section>
  );
};

export default Location;
