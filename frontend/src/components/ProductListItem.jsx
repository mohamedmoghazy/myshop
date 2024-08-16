import React from 'react';
import '../styles/ProductListItem.css';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const ProductListItem = ({ item }) =>
{
    return (
        <Link to={`/product/${item._id}`} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-description">{item.description}</p>
                <div>
                    <Rating value={item.rating} text={`${item.numReviews} reviews`} />
                </div>
                <p className="product-price">${item.price}</p>
            </div>
        </Link>
    );
}

export default ProductListItem;