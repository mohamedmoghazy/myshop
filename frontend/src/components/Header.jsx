import React from 'react'
import styles from '../styles/Header.module.css';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header = () =>
{
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link to="/" className={styles.homeButton}>Home</Link>
                </div>
                <div className={styles.navRight}>
                    <Link to="/cart" className={styles.cartButton}>
                        <FaShoppingCart />
                    </Link>
                    <Link to="/signin" className={styles.signinButton}> Sign In</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;