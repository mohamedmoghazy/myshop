import React from 'react'
import styles from '../styles/Header.module.css';
import { FaShoppingCart } from 'react-icons/fa'


const Header = () =>
{
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <a href="/" className={styles.homeButton}>Home</a>
                </div>
                <div className={styles.navRight}>
                    <a href="/cart" className={styles.cartButton}>
                        <FaShoppingCart />
                    </a>
                    <a href="/signin" className={styles.signinButton}> Sign In</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;