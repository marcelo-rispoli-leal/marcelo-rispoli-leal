import Experiences from "../models/Experiences.js";

// Get all experiences
export async function getAllExperiences() {
  return await Experiences.find({}).sort({ createdAt: -1 });
}
