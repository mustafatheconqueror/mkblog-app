// src/pages/Blogs.jsx
import React from 'react';
import styles from './Blogs.module.css';

const Blogs = () => {
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
            <h1>Blogs</h1>
            <div className={styles.blogList}>
                {blogPosts.map((post) => (
                    <div key={post.id} className={styles.blogCard}>
                        <h2>{post.title}</h2>
                        <p className={styles.date}>{post.date}</p>
                        <p>{post.excerpt}</p>
                        <button className={styles.readMore}>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
