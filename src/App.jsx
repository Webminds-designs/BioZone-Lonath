import "./App.css";
import Home from "./pages/Home.jsx";
import Location from "./pages/Location.jsx";
import GetinTouch from "./pages/getintouch.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Gallery from "./pages/Gallery.jsx";
import CTA from "./components/CTA.jsx";

import Ism from "./components/ISM.jsx";
import Siyochem from "./components/Siyochem.jsx";
import Sisulka from "./components/Sisulka.jsx";
import Shakthi from "./components/Shakthi.jsx";
import Loader from "./components/Loader/loader.jsx";
import drLogo from "./assets/drLogo2.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      {/* Logo in the top-right corner */}
      <div className="top-right-logo">
        <img src={drLogo} alt="Dr Logo" />
      </div>

      <Header />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="LocationSection"
      >
        <Routes>
          {/* Route Components */}
          <Route path="/" element={<Location />} />
          <Route path="/ism" element={<Ism />} />
          <Route path="/sisulka" element={<Sisulka />} />
          <Route path="/shakthi" element={<Shakthi />} />
          <Route path="/siyochem" element={<Siyochem />} />
        </Routes>
      </motion.div>

      {/* CTA Component appears after Location */}
      <CTA />

      {/* Components like Gallery and GetInTouch outside of routes */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Gallery />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GetinTouch />
      </motion.div>

      <Footer />
    </Router>
  );
}

export default App;
