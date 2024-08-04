import React from 'react';
import '../styles/ProductListItem.css';

const ProductListItem = ({ item }) => {
    return (
        <div className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-description">{item.description}</p>
                <p className="product-price">${item.price}</p>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductListItem;