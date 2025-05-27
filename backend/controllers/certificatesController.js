import Certificates from "../models/Certificates.js";

// Get all certificates
export async function getAllCertificates() {
  return await Certificates.find({}).sort({ createdAt: -1 });
}
