import React from 'react';
import main3 from '../assets/wallpaper2.png';
import '../css/gallery.css';

const ContactUs = () => {
    return (
      <section id="section3">
          
         <div className="boxes-container">
           <div className="box one"></div>
           <div className="box two"></div>
           <div className="box three"></div>
           <div className="box four"></div>
           <div className="box five"></div>
           <div className="box six"></div>
           <div className="box seven"></div>
           <div className="box eight"></div>
           <div className="box nine"></div>
         </div>


         <img src={main3} alt="Dr.Charitha Munasinghe" className="gallery-wallpaper"/>

      </section>
    );
};

export default ContactUs;
