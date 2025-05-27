import Skills from "../models/Skills.js";

// Get all skills
export async function getAllSkills() {
  return await Skills.find({}).sort({ createdAt: -1 });
}
