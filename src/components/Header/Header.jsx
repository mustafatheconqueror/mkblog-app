// src/components/Header/Header.jsx
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import logo from '../../assets/react.svg'; // Adjust the path if necessary

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleHamburgerClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/" onClick={closeMobileMenu}>
                    <img src={logo} alt="MkBlog Logo" className={styles.logoImage} />
                </NavLink>
            </div>
            <nav
                className={classNames(styles.nav, {
                    [styles.active]: isMobileMenuOpen,
                })}
            >
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) =>
                                isActive ? styles.activeLink : undefined
                            }
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.actions}>
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
                <div
                    className={classNames(styles.hamburger, {
                        [styles.open]: isMobileMenuOpen,
                    })}
                    onClick={handleHamburgerClick}
                    aria-label="Toggle navigation menu"
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleHamburgerClick();
                    }}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
