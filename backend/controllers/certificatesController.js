import mongoose from "mongoose";

// Get all certificates
export async function getAllCertificates(lang = "pt") {
  try {
    const collection = mongoose.connection.collection(lang);
    const doc = await collection.findOne({});
    if (!doc || !doc.collections || !doc.collections.certificates) {
      console.warn(
        `No data or certificates structure found for language ${lang}`,
      );
      return { title: "", content: [] };
    }
    return doc.collections.certificates;
  } catch (error) {
    console.error(`Error in getAllCertificates for lang ${lang}:`, error);
    throw error;
  }
}
