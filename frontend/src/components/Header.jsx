import React from 'react';
import styles from '../styles/Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector((state) => state.cart);
    const cartItems = Array.isArray(cart.cartItems) ? cart.cartItems : [];

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link to="/" className={styles.homeButton}>Home</Link>
                </div>
                <div className={styles.navRight}>
                    <Link to="/cart" className={styles.cartButton}>
                        <FaShoppingCart />
                        {
                            cartItems.length > 0 && (
                                <span className={styles.cartItemsCount}>
                                    {cartItems.reduce ((acc, item) => acc + item.quantity, 0)}
                                </span>
                            )
                        }
                    </Link>
                    <Link to="/signin" className={styles.signinButton}>Sign In</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;