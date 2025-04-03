import express from 'express';
import sql from 'mssql';

import  {connectDB}  from '../db.js';

const router = express.Router();


router.get('/online', async (req, res) => {
  try {
    const pool = await connectDB();
    const result = await pool.request().query('SELECT * FROM OnlineConfig');
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});


router.post('/InsertOnlineConfig', async (req, res) => {
  const {
    client_id,
    client_secret,
    user_name,
    password,
    organization_id,
    secret_id,
    scope,
    access_token_url,
    api_name,
    api_name_gl_entries,
    company_name,
    customer_key,
  } = req.body;

  try {
    const pool = await connectDB();
    await pool
      .request()
      .input('clientId', sql.VarChar, client_id)
      .input('clientSecret', sql.VarChar, client_secret)
      .input('username', sql.VarChar, user_name)
      .input('password', sql.VarChar, password)
      .input('organizationId', sql.VarChar, organization_id)
      .input('secretId', sql.VarChar, secret_id)
      .input('scope', sql.VarChar, scope)
      .input('accessTokenUrl', sql.VarChar, access_token_url)
      .input('apiName', sql.VarChar, api_name)
      .input('apiNameGlEntries', sql.VarChar, api_name_gl_entries)
      .input('companyName', sql.VarChar, company_name)
      .input('customerKey', sql.VarChar, customer_key)
      .execute('InsertOnlineConfig'); // Call stored procedure

    res.status(201).json('Form Posted Successfully');
  } catch (error) {
    res.status(500).json({ message: 'Error Posting Data', error });
    console.log(error.message)
  }
});

export default router;
