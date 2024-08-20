import SearchHistory from "../models/searchHistory.js";

export const saveSearchHistory = async (req, res) => {
  const { prompt, response } = req.body;

  try {
    const newSearchHistory = new SearchHistory({
      prompt,
      response,
    });

    await newSearchHistory.save();
    res.status(200).json({ message: "Search history saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save search history" });
  }
};
