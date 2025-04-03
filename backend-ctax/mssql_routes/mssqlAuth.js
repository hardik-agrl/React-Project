import express from 'express';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import { connectDB } from '../db.js';

const router = express.Router();

// Login
router.post('/auth/login', async (req, res) => {
    const { company_name, license_key } = req.body;

    try {
        const pool = await connectDB();
        const result = await pool.request()
            .input('company_name', sql.VarChar, company_name)
            .input('license_key', sql.VarChar, license_key)
            .query('SELECT * FROM Users WHERE company_name = @company_name AND license_key = @license_key');

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: 'Invalid company name or license key' });
        }

        const user = result.recordset[0];
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, userId: user.id });
    } catch (error) {
        res.status(500).json({ message: 'Database error', error: error.message });
    }
});

export default router;
