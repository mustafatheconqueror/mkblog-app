// src/pages/Home.jsx
import React, { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Basit bir doğrulama
        if (email) {
            // Burada e-posta aboneliği işlemleri yapılabilir (API çağrısı vb.)
            setMessage('Thank you for subscribing!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Improve Your Engineering and Architecture Skills</h1>
            <p className={styles.subTitle}>
                Hello, I am Karacabey and welcome to the practical .NET newsletter.
            </p>
            <p className={styles.description}>
                Each week you will get 1 practical tip with best practices and architecture advice.
            </p>

            <form className={styles.subscriptionForm} onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.emailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className={styles.subscribeButton}>
                    Subscribe
                </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default Home;
