import Graduations from "../models/Graduations.js";

// Get all graduations
export async function getAllGraduations() {
  return await Graduations.find({}).sort({ createdAt: -1 });
}
