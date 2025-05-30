import mongoose from "mongoose";

// Get all highlights
export async function getAllHighlights(lang = "pt") {
  try {
    const collection = mongoose.connection.collection(lang);
    const doc = await collection.findOne({});
    if (!doc || !doc.collections || !doc.collections.highlights) {
      console.warn(
        `No data or highlights structure found for language ${lang}`,
      );
      return { title: "", content: [] };
    }
    return doc.collections.highlights;
  } catch (error) {
    console.error(`Error in getAllHighlights for lang ${lang}:`, error);
    throw error;
  }
}
