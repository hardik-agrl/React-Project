import express from 'express';
import OnlineData from '../models/OnlineData.js';  // Import the Mongoose model

const router = express.Router();

// Fetch all data from MongoDB
router.get('/online', async (req, res) => {
  try {
    const allData = await OnlineData.find(); // Fetch data from MongoDB
    res.json(allData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

export default router;
