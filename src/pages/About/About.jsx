// src/pages/About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <p>
                Welcome to MkBlog! We are passionate about sharing insightful articles and stories
                on a variety of topics. Our mission is to inform, inspire, and engage our readers.
            </p>
            <p>
                Whether you're looking for tutorials, opinion pieces, or in-depth analyses, you'll find
                it all here. Thank you for visiting and supporting our blog!
            </p>
        </div>
    );
};

export default About;
