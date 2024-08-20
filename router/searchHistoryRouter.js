import express from 'express';
import AIResponse from '../models/searchHistory.js';

const router = express.Router();

// Save AI prompt and response
router.post('/save-search-history', async (req, res) => {
  const { prompt, response } = req.body;

  try {
    const newAIResponse = new AIResponse({
      prompt,
      response
    });

    await newAIResponse.save();
    res.status(200).json({ message: 'Search history saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save search history' });
  }
});

export default router;
