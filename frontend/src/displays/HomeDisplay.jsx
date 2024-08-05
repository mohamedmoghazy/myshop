import React from 'react';
import '../styles/HomeDisplay.css';
import products from '../../../backend/data/products';
import ProductListItem from '../components/ProductListItem';

const HomeDisplay = () => {
    return (
        <>
            <h1 className='title'>Products</h1>
            <div className="grid-container">
                {products.map((product, index) => (
                    <ProductListItem key={index} item={product} />
                ))}
            </div>
        </>
    );
}

export default HomeDisplay;