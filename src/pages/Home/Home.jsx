// src/pages/Home.jsx
import React, { useState } from 'react';
import styles from './Home.module.css';
import {FaLightbulb, FaSyncAlt, FaCode, FaCogs, FaLinkedin, FaTwitter} from 'react-icons/fa';
import WorldModel from "../../components/WorldModel.jsx";

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

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding React Context',
            excerpt:
                'React Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
            date: 'October 10, 2023',
        },
        {
            id: 2,
            title: 'A Guide to CSS Flexbox',
            excerpt:
                'Flexbox is a one-dimensional layout method for arranging items in rows or columns. It makes it easier to design flexible responsive layout structures.',
            date: 'November 5, 2023',
        },
        {
            id: 3,
            title: 'Mastering JavaScript Closures',
            excerpt:
                'Closures are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.',
            date: 'December 15, 2023',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Improve Your Engineering and Architecture Skills</h1>
            <p className={styles.subTitle}>
                Hello, I am Anton and welcome to the practical .NET newsletter.
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

            {/* Yeni Bölüm: World Model */}
            <section className={styles.worldModelSection}>
                <h2 className={styles.worldModelTitle}>Our Global Network</h2>
                <WorldModel />
            </section>

            {/* Yeni Bölüm: Features */}
            <section className={styles.featuresSection}>
                <h2 className={styles.featuresTitle}>Grow faster as a developer</h2>
                <p className={styles.featuresSubtitle}>Everything you need to become a better developer</p>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <FaLightbulb className={styles.featureIcon} />
                        <h3 className={styles.featureTitle}>Practical Tips and Source Code</h3>
                        <p className={styles.featureDescription}>
                            From each blog you can get practical tips and source you can use in your projects.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaSyncAlt className={styles.featureIcon} />
                        <h3 className={styles.featureTitle}>Stay Up-To-Date</h3>
                        <p className={styles.featureDescription}>
                            My blogs will keep you ahead with the latest techniques and best practices in the ever-evolving tech landscape.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaCode className={styles.featureIcon} />
                        <h3 className={styles.featureTitle}>Real World Experience</h3>
                        <p className={styles.featureDescription}>
                            Explore practical coding examples and real-world applications. Enhance your understanding and build robust solutions.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <FaCogs className={styles.featureIcon} />
                        <h3 className={styles.featureTitle}>Advanced .NET Architecture</h3>
                        <p className={styles.featureDescription}>
                            Dive deeper into domain-driven design, modular monoliths, microservices, and advanced architecture patterns in .NET to build robust, scalable applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Yeni Bölüm: Recent Posts */}
            <section className={styles.recentPostsSection}>
                <h2 className={styles.recentPostsTitle}>Recent Posts</h2>
                <p className={styles.recentPostsSubtitle}>Explore the recent blog posts</p>
                <div className={styles.recentPostsGrid}>
                    {blogPosts.map((post) => (
                        <div key={post.id} className={styles.postCard}>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <p className={styles.postDate}>{post.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Yeni Bölüm: Let's Connect */}
            <section className={styles.connectSection}>
                <h2 className={styles.connectTitle}>Let's Connect</h2>
                <p className={styles.connectSubtitle}>
                    I share .NET and Architecture knowledge on social media. Follow me and let's connect.
                </p>
                <div className={styles.socialIcons}>
                    <a
                        href="https://www.linkedin.com/in/anton-profile" // Kendi LinkedIn profil URL'niz ile değiştirin
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.socialLink}
                    >
                        <FaLinkedin className={styles.socialIcon} />
                    </a>
                    <a
                        href="https://twitter.com/anton_profile" // Kendi Twitter profil URL'niz ile değiştirin
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className={styles.socialLink}
                    >
                        <FaTwitter className={styles.socialIcon} />
                    </a>
                    {/* İstediğiniz diğer sosyal medya platformlarını ekleyebilirsiniz */}
                </div>
            </section>
        </div>
    );
};

export default Home;
