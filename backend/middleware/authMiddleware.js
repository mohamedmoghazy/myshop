import JWT from 'jsonwebtoken';
import AsyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//protect routes
const protect = AsyncHandler(async (req, res, next) =>
{
    let token;

    // Read JWT from the coookie
    token = req.cookies.sparktimetoken;

    // Make sure token exists
    if (token)
    {
        try
        {
            // Verify token
            const decoded = JWT.verify(token, process.env.JWT_SECRET);

            // Find user by id
            req.user = await User.findById(decoded.userId).select('-password');

            next();
        }
        catch (error)
        {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else
    {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

//Admin middleware
const admin = (req, res, next) =>
{
    if (req.user && req.user.isAdmin)
    {
        next();
    }
    else
    {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

export { protect, admin };