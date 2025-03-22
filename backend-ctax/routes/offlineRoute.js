import OfflineData from '../models/OfflineData.js'
import express from 'express'

const router = express.Router();

router.get('/offline', async(req, res)=>{
    try{
        const allData = await OfflineData.find();
        res.json(allData);

    } catch(error){
        res.status(500).json({message: 'Error fetching data',error});
    }
});

export default router;