import mongoose from "mongoose";

// Get all experiences
export async function getAllExperiences(lang = "pt") {
  try {
    const collection = mongoose.connection.collection(lang);
    const doc = await collection.findOne({});
    if (!doc || !doc.collections || !doc.collections.experiences) {
      console.warn(
        `No data or experiences structure found for language ${lang}`,
      );
      return { title: "", content: [] };
    }
    return doc.collections.experiences;
  } catch (error) {
    console.error(`Error in getAllExperiences for lang ${lang}:`, error);
    throw error;
  }
}
