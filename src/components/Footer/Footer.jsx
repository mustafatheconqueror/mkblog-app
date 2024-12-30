// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>MkBlog</h2>
                    <p>&copy; {new Date().getFullYear()} MkBlog. All rights reserved.</p>
                </div>
                <div className={styles.right}>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
