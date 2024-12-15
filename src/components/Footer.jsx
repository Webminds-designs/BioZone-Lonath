import React, { useState } from 'react';
import '../css/Footer.css';
import FooterBack from '../assets/footer.png'
import Biozone from '../assets/Bz-logo.png'
import { Link } from "react-scroll";

import GetinTouch from '../pages/getintouch';

const Footer = () => {

  const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (message, e) => {
        e.preventDefault(); 
        setPopupMessage(message); 
        setShowPopup(true); 

        
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

  return (
    <>
    
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section one1">
            <img src={Biozone} alt="Biozone-Logo" srcset="" className="biozone"/>
        </div>

          <div className="footer-section1 two1">
          </div>

  
          <div className="footer-section">

          <h4>Navigate</h4>
          <ul>
            <li>
              <Link to="section1" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="section3" smooth={true} duration={500}>
              Gallery
              </Link>
            </li>
            <li>
              <Link to="section2" smooth={true} duration={500}>
                Location
              </Link>
            </li>

            <li>
              <Link to="section4" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <ul className="social-media">
            <li><a href="https://web.facebook.com/p/DrCharitha-Munasinghe-100064107070329/" target='_blank'>Facebook</a></li>
            <li><a href="https://www.instagram.com/dr.charithamunasinghe/?hl=en" target='_blank'>Instagram</a></li>
            <li><a href="https://www.youtube.com/@dr.charithamunasinghe2336" target='_blank'>Youtube</a></li>
            <li><a href="https://www.tiktok.com/@dr.charitha_munasinghe" target='_blank'>Tiktok</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/home">Terms</a></li>
            <li><a href="/services">Privacy</a></li>
            <li><a href="/contact">Licenses</a></li>
          </ul>
        </div>

      </div>

      <hr></hr>
      <div className="footer-bottom">
        <p>&copy; 2024 BioZone . Dr.Charitha Munasinghe . All rights reserved.</p>
      </div>

      <img src={FooterBack} className="Footer-Background" draggable="false"/>
    </footer>
    </>
  );
}

export default Footer;
