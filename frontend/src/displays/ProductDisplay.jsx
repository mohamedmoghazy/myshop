import '../styles/index.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader.jsx';

const ProductDisplay = () =>
{
    const { id: productId } = useParams();

    const [quantity, setQuantity] = useState(1);

     const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const { data: product, error, isLoading } = useGetProductDetailsQuery(productId);

    return (
        <div className= 'product-body'>
            <div className='product-details'>

                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <div>
                        {error?.data?.message || error.error}
                    </div>
                ) : (
                    <>
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

                        {product.countInStock <= 0 && (
                                <div className='out-of-stock'>
                                        Out of Stock
                                    </div>
                                )}

                        {product.countInStock > 0 && (
                            <div className='quantity-add-to-cart'>
                                <div className="quantity-selector">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <select
                                        id="quantity"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                    >
                                        {[...Array(product.countInStock).keys()].map(x => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className='add-to-cart-button' onClick={() => console.log(`Added ${quantity} to cart`)}>
                                    Add to Cart
                                </button>
                            </div>
                        )}
                    </>
                )}

                <Link className='button' to={'/'}>
                GoBack
                </Link>
            </div>
     
        </div>
    )
}

export default ProductDisplay