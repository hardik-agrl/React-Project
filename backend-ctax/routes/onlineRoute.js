import express from 'express';
import OnlineData from '../models/OnlineData.js';  

const router = express.Router();


router.get('/online', async (req, res) => {
  try {
    const allData = await OnlineData.find(); 
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});


router.post("/InsertOnlineConfig", async (req,res)  => {
  const {client_id,client_secret,user_name,password,organization_id,secret_id,scope,access_token_url,api_name,api_name_gl_entries,company_name,customer_key} = req.body;
  try{
    const newentry = new OnlineData({client_id:client_id,client_secret:client_secret,user_name:user_name,password:password,organization_id:organization_id,secretId:secret_id,scope:scope,access_token_url:access_token_url,api_name:api_name,api_name_gl_entries:api_name_gl_entries,company_name:company_name,customer_key:customer_key});
    await newentry.save();
    res.status(201).json("Form Posted Successfully");

  } catch(error){
    res.status(500).json({message:'Error Posting Data',error})
  }
  
})


export default router;
