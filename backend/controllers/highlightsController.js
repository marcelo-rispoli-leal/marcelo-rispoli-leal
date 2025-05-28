import Highlights from "../models/Highlights.js";

// Get all highlights
export async function getAllHighlights() {
  return await Highlights.find({}).sort({ createdAt: -1 });
}
