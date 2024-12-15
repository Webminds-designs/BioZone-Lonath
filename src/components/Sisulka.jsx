import React from 'react';
import '../css/classes.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6886142651288!2d80.39532065461246!3d6.685440261053734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf1046dd5875%3A0xf53cf310303192e4!2sSisulka%20Higher%20Educational%20Institute!5e0!3m2!1sen!2slk!4v1725306817857!5m2!1sen!2slk";

export default function Siyochem() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const infoTiles = [
        { title: 'Theory', year: '2026', day: 'Sunday', time: '1 :00 PM - 5 :00 PM' },
    ];

    return (
        <section className="sectionClass">
            <motion.div className="info"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="info-segment">
                    {infoTiles.map((tile, index) => (
                        <motion.div
                            key={index}
                            className="Info-tile"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.3 }} // Apply delay based on index
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
