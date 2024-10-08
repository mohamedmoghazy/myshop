import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

import
{
    login,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', login);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect,
    admin, getUserById).put(protect, admin, updateUser);

export default router;