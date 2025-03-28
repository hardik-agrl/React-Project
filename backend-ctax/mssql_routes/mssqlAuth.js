import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sql from 'mssql';

import {connectDB} from '../db.js' // Import database configuration

const router = express.Router();

// Register
router.post('/auth/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const pool = await connectDB();
        const userCheck = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');

        if (userCheck.recordset.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, hashedPassword)
            .query('INSERT INTO Users (email, password) VALUES (@email, @password)');

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const pool = await connectDB();
        const userResult = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT * FROM Users WHERE email = @email');

        if (userResult.recordset.length === 0) {
            return res.status(400).json({ message: 'User not found!' });
        }

        const user = userResult.recordset[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password!' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, userId: user.id });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;