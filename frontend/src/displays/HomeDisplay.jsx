import React from 'react';
import '../styles/HomeDisplay.css';
import products from '../products';
import ListItemDisplay from './ListItemDisplay';

const HomeDisplay = () => {
    return (
        <>
            <h1 className='title'>Products</h1>
            <div className="grid-container">
                {products.map((product, index) => (
                    <ListItemDisplay key={index} item={product} />
                ))}
            </div>
        </>
    );
}

export default HomeDisplay;