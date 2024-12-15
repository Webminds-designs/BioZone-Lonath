import React, { useEffect, useState } from 'react';
import "../css/styles.css";
import drLogo from "../assets/drLogo.png"
import { Link } from "react-scroll";

const Header = () => {

  const [isVisible,setIsVisible] = useState(true);
  const[lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll =  () => {

    
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    }
    else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll",handleScroll);
  return ()=>{
    window.removeEventListener("scroll",handleScroll);
  };
},[lastScrollY]);

return (
  <>
    <div className={`header-container ${isVisible ? "visible" : "hidden"}`}>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="section1" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="section4" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
);
};


export default Header;

