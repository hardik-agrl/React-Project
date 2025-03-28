import express from 'express';
import sql from 'mssql';
import  {connectDB}  from '../db.js'; 

const router = express.Router();

// Fetch all data from SQL Server
router.get('/offline', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM OfflineData');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});

// Insert data into SQL Server using Stored Procedure
router.post('/InsertOfflineConfig', async (req, res) => {
    const { config_type, company_name, licence_key, user_id, password, trail_balance_api } = req.body;
    
    try {
        const pool = await connectDB();
        await pool
            .request()
            .input('configType', sql.VarChar, config_type)
            .input('companyName', sql.VarChar, company_name)
            .input('licenceKey', sql.VarChar, licence_key)
            .input('userId', sql.VarChar, user_id)
            .input('password', sql.VarChar, password)
            .input('trailBalanceApi', sql.VarChar, trail_balance_api)
            .execute('InsertOfflineConfig'); // Call stored procedure

        res.status(201).json({ message: 'Posted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Posting data', error });
    }
});

export default router;
