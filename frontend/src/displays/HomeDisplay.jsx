import '../styles/HomeDisplay.css';
import ProductListItem from '../components/ProductListItem.jsx';
import { useGetProductsQuery } from '../slices/productsApiSlice.js';
import Loader from '../components/Loader.jsx';
import Message, { AlertTypes } from '../components/Message.jsx';

const HomeDisplay = () =>
{
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                    <Message type={ AlertTypes.ERROR }>{error.data?.message || error.error}</Message>
            ) : (
                <>
                    <h1 className='title'>Products</h1>
                    <div className="grid-container">
                        {products.map((product, index) => (
                            <ProductListItem key={index} item={product} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default HomeDisplay;