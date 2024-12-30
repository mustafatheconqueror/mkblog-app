// src/components/Header/Header.jsx
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import logo from '../../assets/logo.png';

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

            {/* Sol Bölüm: Logo ve "Blogs" */}
            <div className={styles.leftSection}>
                <NavLink to="/" onClick={closeMobileMenu} className={styles.logoLink}>
                    <img src={logo} alt="MkBlog Logo" className={styles.logoImage} />
                </NavLink>
            </div>

            {/* Orta Bölüm: Diğer Navigasyon Linkleri */}
            <nav
                className={classNames(styles.nav, {
                    [styles.active]: isMobileMenuOpen,
                })}
            >
                <ul className={styles.navList}>
                    <li>
                        <NavLink
                            to="/blogs"
                            className={({isActive}) =>
                                isActive ? classNames(styles.navLink, styles.activeLink) : styles.navLink
                            }
                            onClick={closeMobileMenu}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sponsorship"
                            className={({isActive}) =>
                                isActive ? classNames(styles.navLink, styles.activeLink) : styles.navLink
                            }
                            onClick={closeMobileMenu}
                        >
                            Sponsorship
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                isActive ? classNames(styles.navLink, styles.activeLink) : styles.navLink
                            }
                            onClick={closeMobileMenu}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Sağ Bölüm: Tema Toggle ve Hamburger Menü */}
            <div className={styles.actions}>
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <FaMoon/> : <FaSun/>}
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
