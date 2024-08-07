import bcript from 'bcryptjs';
import e from 'express';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcript.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'mohamed',
        email: 'mohamed@email.com',
        password: bcript.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'sanad',
        email: 'sanad@email.com',
        password: bcript.hashSync('123456', 10),
        isAdmin: true,
    }
];

export default users;