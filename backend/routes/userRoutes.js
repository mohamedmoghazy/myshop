import express from 'express';
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

router.route('/').post(registerUser).get(getUsers);
router.post('/login', login);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);

export default router;