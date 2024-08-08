import asyncHandler from '../middleware/asyncHandler.js';
import product from '../models/productModel.js';


// @desc    Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) =>
{
    const products = await product.find({});
    res.json(products);
});

// @desc    Fetch single product
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) =>
{
    const productData = await product.findById(req.params.id);

    if (productData)
    {
        res.json(productData);
    }
    else
    {
        res.status(404);
        throw new Error('Resource not found');
    }
});

export { getProducts, getProductById };