import '../styles/index.css';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductDisplay = () =>
{
    const { id: productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => 
    {
        const fetchProduct = async () =>
        {
            const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
            setProduct(data);
            console.log(data);
        };

        fetchProduct();
    }, [ productId ]);

    return (
        <div className= 'product-body'>
            <div className='product-details'>
                <img src={product.image} alt={product.name} className='product-image' />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Count In Stock:</strong> {product.countInStock}</p>
                <div>
                    <strong>Rating: </strong><Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>
                <Link className='button' to={'/'}>
                GoBack
                </Link>
            </div>
     
        </div>
    )
}

export default ProductDisplay