import express from 'express';
import sql from 'mssql';
import  {connectDB}  from '../db.js'; 

const router = express.Router();


router.get('/offline', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM OfflineData');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});


router.post('/InsertOfflineConfig', async (req, res) => {
    const { config_type, company_name, licence_key, user_id, password, trail_balance_api } = req.body;
    
    try {
        const pool = await connectDB();
        await pool
            .request()
            .input('config_type', sql.VarChar, config_type)
            .input('company_name', sql.VarChar, company_name)
            .input('licence_key', sql.VarChar, licence_key)
            .input('user_id', sql.VarChar, user_id)
            .input('password', sql.VarChar, password)
            .input('trail_balance_api', sql.VarChar, trail_balance_api)
            .query(`
                INSERT INTO OfflineData (config_type, company_name, licence_key, user_id, password, trail_balance_api)
                VALUES (@config_type, @company_name, @licence_key, @user_id, @password, @trail_balance_api);
            `);

        res.status(201).json({ message: 'Posted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error Posting data', error });
        console.error(error);
    }
});



export default router;
