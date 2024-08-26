import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import '../styles/CartDisplay.css';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartDisplay = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.cart);
    const { cartItems } = cartState;

    const removeFromCartHandler = async (id) => {
        dispatch(removeFromCart(id));
    };

    const addToCartHandler = async (item, quantity) => {
        dispatch(addToCart({ ...item, quantity }));
    };

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    Your cart is empty. <Link to="/">Go back</Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item._id}>
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                                    <span>Price: ${item.price}</span>
                                    <span>
                                        Quantity:
                                        <select
                                            value={item.quantity}
                                            onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </span>
                                </div>
                                <div className="cart-item-delete">
                                    <FaTrash onClick={() => removeFromCartHandler(item._id)} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-section">
                        <div className="total-price">
                            Total: ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                        </div>
                        <button className="checkout-button" onClick={() => navigate('/checkout')}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartDisplay;