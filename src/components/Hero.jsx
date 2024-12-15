import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import HeroImage1 from '../assets/wallpaper12.jpg';
import HeroImage2 from '../assets/wallpaper11.jpg';
import HeroImage3 from '../assets/wallpaper13.jpg';

export default function Hero() {
    const images = [HeroImage1, HeroImage2, HeroImage3]; 
    const texts = [

        {
            titleLine1: "Dr. CHARITHA",
            titleLine2: "MUNASINGHE",
            description: `Graduated from the prestigious University of Peradeniya, he found 
                          his true calling in teaching, empowering countless students to
                          gain admission to state universities, particularly into
                          medical faculties. With a legacy spanning 10 triumphant 
                          years, he is ready to guide you towards your goals.`
        },
        {
            titleLine1: `Embark With us`,
            titleLine2: `for Success`,
            description: `Embark on a successful journey 
                        to your dream of becoming a doctor 
                        and uncover the wonders of life`
        },
        {
            titleLine1: "Our Biology",
            titleLine2: "Classes",
            description: `Unlock your full potential with Dr. Charitha Munasinghe! 
                        Choose from flexible online Zoom classes with comprehensive 
                        study materials delivered to your door, or attend personalized 
                        face-to-face sessions. 

                        Physical classes are available in Sinhala at Siyochem (Nugegoda) 
                        and Sisulka (Rathnapura), and in English at ISM (Nugegoda) and 
                        Shakthi (Bambalapitiya). 

                        Start your journey today!`
        }

    ];
    
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in'); 
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass(''); 
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length); 
                setFadeClass('fade-in'); 
            }, 1500);
        }, 6000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    // Button visibility effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true); 
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const currentText = texts[currentImage]; 

    return (
        <>    

            {showButton && (
                <button
                    className="cta-button"
                    onClick={() => window.open("https://charithamunasinghe.com/login", "_blank")}
                >
                    Online Student Portal
                </button>
            )}

            <div className={`HeroText ${fadeClass}`}> 
                <h1 className="HeroTitle">

                    <span className="line1">{currentText.titleLine1}</span>
                        <br />
                    <span className="line2">{currentText.titleLine2}</span>

                </h1>
    
                <h2 className="HeroDesc">
                    {currentText.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h2>

            </div> 
    
            <img
                src={images[currentImage]}
                alt="background"
                className={`full-screen-image ${fadeClass}`}
                draggable="false"
            />
        </>
    );
    
}
