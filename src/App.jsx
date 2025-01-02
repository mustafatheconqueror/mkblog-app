import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import './index.css';
import Sponsorship from "./pages/Sponsorship/Sponsorship.jsx";
import About from "./pages/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Ensure global styles are applied

const App = () => {
    return (
        <Router>
            <Header />
            <main style={{ padding: '40px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/sponsorship" element={<Sponsorship />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
