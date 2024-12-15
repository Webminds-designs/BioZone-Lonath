import React from 'react';
import '../css/classes.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.9547165463161!2d79.89182806771878!3d6.868383302217691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4360cdb517%3A0xb3f6bc9d927db69f!2sISM%20Nugegoda!5e0!3m2!1sen!2slk!4v1725163545659!5m2!1sen!2slk";

export default function Ism() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const infoTiles = [
        { title: 'Theory', year: '2026', day: 'Monday', time: '3 :00 PM - 6 :30 PM' },
        { title: 'Theory', year: '2025', day: 'Tuesday', time: '3 :00 PM - 7 :00 PM' },
        { title: 'Paper', year: '2025', day: 'Friday', time: '3 :00 PM - 6 :30 PM' },
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

