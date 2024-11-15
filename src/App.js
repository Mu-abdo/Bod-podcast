import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Exportations from './Pages/Exportations';
import Pod from './Pages/Pod';
import Video from './Pages/Video';
import Blog from './Pages/Blog';
import Navbar from './Pages/Component/NavBar';
import Footer from './Pages/Component/Footer';
import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import WOW from 'wowjs';
import './App.css';

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router>

      <div className="App font-cairo">
        <Navbar />

        <div className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Exportations" element={<Exportations />} />
            <Route path="/pod" element={<Pod />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
