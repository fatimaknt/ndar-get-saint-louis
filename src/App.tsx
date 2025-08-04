import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Experiences from './pages/Experiences';
import Accommodations from './pages/Accommodations';
import Carpooling from './pages/Carpooling';
import RealEstate from './pages/RealEstate';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/hebergements" element={<Accommodations />} />
            <Route path="/covoiturage" element={<Carpooling />} />
            <Route path="/immobilier" element={<RealEstate />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
