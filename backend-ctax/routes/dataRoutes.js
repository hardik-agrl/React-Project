import express from 'express';
import Data from '../models/Data.js';  // Import the Mongoose model

const router = express.Router();

// Fetch all data from MongoDB
router.get('/data', async (req, res) => {
  try {
    const allData = await Data.find(); // Fetch data from MongoDB
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

export default router;
