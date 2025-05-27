import mongoose from "mongoose";

const certificatesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  details: {
    type: String,
    required: [true, "Details are required"],
    trim: true,
  },
});

const Certificates = mongoose.model("Certificates", certificatesSchema);

export default Certificates;
