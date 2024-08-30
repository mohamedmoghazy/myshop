import React from 'react';
import styles from '../styles/Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutUser] = useLogoutMutation();

    const handleLogout = async () =>
    {   
        try {
            await logoutUser();
            dispatch(logout());
            navigate('/');
        } catch (error) {
            console.log(error);
        }   
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link to="/" className={styles.homeButton}>Home</Link>
                </div>
                <div className={styles.navRight}>
                    <Link to="/cart" className={styles.cartButton}>
                        <FaShoppingCart />
                        {cartItems.length > 0 && (
                            <span className={styles.cartItemsCount}>
                                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </Link>

                    {userInfo ? (
                        <div className={styles.userProfileContainer}>
                            <div className={styles.userProfile}>
                                <div className={styles.profilePic} onClick={handleProfileClick}></div>
                                <div className={styles.userName} onClick={handleProfileClick}>{userInfo.name}</div>
                            </div>
                            <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/signin" className={styles.signinButton}>Sign In</Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;