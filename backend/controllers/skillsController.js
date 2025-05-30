import mongoose from "mongoose";

// Get all skills
export async function getAllSkills(lang = "pt") {
  try {
    const collection = mongoose.connection.collection(lang);
    const doc = await collection.findOne({});
    if (!doc || !doc.collections || !doc.collections.skills) {
      console.warn(`No data or skills structure found for language ${lang}`);
      return { title: "", content: [] };
    }
    return doc.collections.skills;
  } catch (error) {
    console.error(`Error in getAllSkills for lang ${lang}:`, error);
    throw error;
  }
}
