import OfflineImport from '../models/OfflineImport.js'
import express from 'express'

const router = express.Router();

router.get('/offlineImp', async(req, res)=>{
    try{
        const allData = await OfflineImport.find();
        res.json(allData);

    } catch(error){
        res.status(500).json({message: 'Error fetching data',error});
    }
});

export default router;