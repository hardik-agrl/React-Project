import express from 'express';
import sql from 'mssql';
import  {connectDB}  from '../db.js'; 

const router = express.Router();


router.get('/offlineImp', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM OfflineImport');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});

export default router;
