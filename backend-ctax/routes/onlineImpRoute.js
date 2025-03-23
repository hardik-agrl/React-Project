import OnlineImport from '../models/OnlineImport.js';
import express from 'express'

const router = express.Router();

router.get('/onlineImp', async(req, res)=>{
    const {from_date,to_date} = req.body;
    try{
        const allData = await OnlineImport.find();
        res.json(allData);
        // console.log("from",from_date,"to",to_date);

    } catch(error){
        res.status(500).json({message: 'Error fetching data',error});
    }
});

export default router;