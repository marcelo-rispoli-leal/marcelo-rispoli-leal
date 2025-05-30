import mongoose from "mongoose";

// Get all graduations
export async function getAllGraduations(lang = "pt") {
  try {
    const collection = mongoose.connection.collection(lang);
    const doc = await collection.findOne({});
    if (!doc || !doc.collections || !doc.collections.graduations) {
      console.warn(
        `No data or graduations structure found for language ${lang}`,
      );
      return { title: "", content: [] };
    }
    return doc.collections.graduations;
  } catch (error) {
    console.error(`Error in getAllGraduations for lang ${lang}:`, error);
    throw error;
  }
}
