import React from 'react';
import '../css/classes.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1444144152806!2d79.88629057604017!3d6.873294293125445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a461503567f%3A0x7a2f1e1e274d8758!2sSiyochem!5e0!3m2!1sen!2slk!4v1725306414885!5m2!1sen!2slk";

export default function Siyochem() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');

    };

    const infoTiles = [
        { title: 'Theory', year: '2025', day: 'Saturday', time: '7 :30 AM - 12 :00 PM' },
        { title: 'Paper', year: '2025', day: 'Friday', time: '3 :00 PM - 6 :30 PM' },
        { title: 'Theory', year: '2026', day: 'Saturday', time: '1 :00 PM - 5 :00 PM' }
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
