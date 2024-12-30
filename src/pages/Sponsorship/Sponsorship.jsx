// src/pages/Sponsorship.jsx
import React from 'react';
import styles from './Sponsorship.module.css';

const Sponsorship = () => {
    return (
        <div className={styles.container}>
            <h1>Sponsorship Opportunities</h1>
            <p>
                Thank you for your interest in sponsoring MkBlog! We offer various sponsorship packages
                tailored to meet your marketing and branding needs.
            </p>
            <h2>Why Sponsor Us?</h2>
            <ul>
                <li>Reach a targeted audience of engaged readers.</li>
                <li>Increase your brand visibility and credibility.</li>
                <li>Support quality content and journalism.</li>
            </ul>
            <h2>Our Packages</h2>
            <p>
                We offer several sponsorship tiers, including banner ads, sponsored posts, and newsletter
                features. Contact us to discuss the best option for your business.
            </p>
            <button className={styles.contactButton}>Contact Us</button>
        </div>
    );
};

export default Sponsorship;
