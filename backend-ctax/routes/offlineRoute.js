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



router.post('/InsertOfflineConfig',async (req,res) => {
    const {config_type,company_name,licence_key,user_id,password,trail_balance_api} = req.body;
    try{
        const newentry = new OfflineData({companyName:company_name,lisenceKey:licence_key,userId:user_id,password:password,balanceApi:trail_balance_api})
        await newentry.save();

        res.status(201).json({message:"Posted Successfully"})

    }   catch(error){
        res.send(500).json({message:'Error Posting data',error})
    }
})

export default router;