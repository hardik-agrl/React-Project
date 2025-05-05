import express from 'express';
import sql from 'mssql';
import  {connectDB}  from '../db.js';

const router = express.Router();


router.get('/onlineImp', async (req, res) => {
    const { from_date, to_date } = req.query;
    // console.log('Received:', from_date, to_date);
    try {
        const pool = await connectDB();
        let query = 'SELECT * FROM OnlineImport';
        let request = pool.request();

        if (from_date && to_date) {
            query += ' WHERE created_at BETWEEN @from_date AND @to_date';
            request.input('from_date', sql.DateTime, new Date(from_date + 'T00:00:00'));
            request.input('to_date', sql.DateTime, new Date(to_date + 'T23:59:59'));

        }

        const result = await request.query(query);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error });
    }
});


export default router;
