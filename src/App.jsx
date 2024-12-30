// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import './index.css'; // Ensure global styles are applied

const App = () => {
    return (
        <Router>
            <Header />
            <main style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
