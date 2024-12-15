import React, { useState } from 'react';
import '../css/classes.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0561051869918!2d79.85610387604022!3d6.883882993115068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc4144f82c9%3A0x23e8ba26fca564e4!2sShakthi%20Institute!5e0!3m2!1sen!2slk!4v1725306305567!5m2!1sen!2slk";

export default function Shakthi() {
    const navigate = useNavigate();
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already occurred

    const handleBackClick = () => {
        navigate('/');
    };

    const infoTiles = [
        { title: 'Theory', year: '2025', day: 'Wednesday', time: '3 :00 PM - 7 :00 PM' },
        { title: 'Paper', year: '2025', day: 'Sunday', time: '1 :00 PM - 4 :00 PM' },
        { title: 'Theory', year: '2026', day: 'Thursday', time: '3 :00 PM - 6 :00 PM' },
    ];

    return (
        <section id="sectionClass">
            <motion.div className="info"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 50 }} // Set the end state if animation is complete
                transition={{ duration: 0.7 }}
                onAnimationComplete={() => setHasAnimated(true)} // Mark animation as complete
            >
                <div className="info-segment">
                    {infoTiles.map((tile, index) => (
                        <motion.div
                            key={index}
                            className="Info-tile"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }} // Same logic for child elements
                            transition={{ duration: 0.7, delay: index * 0.3 }}
                        >
                            <div className="title">
                                <h1 style={{ color: '#2485f9' }}>{tile.title}</h1>
                                <h1 style={{ color: '#60a2f7' }}>{tile.year}</h1>
                            </div>
                            <h2 className="DateTime">{tile.day} <br /> {tile.time}</h2>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="side-panel">
                <button className="back-btn" onClick={handleBackClick}>Back</button>

                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                    className="maps"
                ></iframe>
            </div>
        </section>
    );
}
