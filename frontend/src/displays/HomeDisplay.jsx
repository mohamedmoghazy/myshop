import { useEffect, useState } from 'react';
import '../styles/HomeDisplay.css';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';

const HomeDisplay = () =>
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        const fetchProducts = async () => 
        {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        console.log(products),
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