import mongoose from "mongoose";

const graduationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  institution: {
    type: String,
    required: [true, "Institution is required"],
    trim: true,
  },
  period: {
    type: String,
    required: [true, "Period is required"],
    trim: true,
  },
});

const Graduations = mongoose.model("Graduations", graduationsSchema);

export default Graduations;
