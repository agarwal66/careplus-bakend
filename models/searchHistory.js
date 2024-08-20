import mongoose from 'mongoose';

const aiResponseSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const AIResponse = mongoose.model('AIResponse', aiResponseSchema);
export default AIResponse;
