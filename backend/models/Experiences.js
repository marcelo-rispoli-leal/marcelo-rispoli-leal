import mongoose from "mongoose";

const experiencesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  company: {
    type: String,
    required: [true, "Company is required"],
    trim: true,
  },
  period: {
    type: String,
    required: [true, "Period is required"],
    trim: true,
  },
  clients: {
    type: String,
    trim: true,
  },
  highlight: {
    type: String,
    trim: true,
  },
  activities: [
    {
      type: String,
      trim: true,
    },
  ],
});

const Experiences = mongoose.model("Experiences", experiencesSchema);

export default Experiences;
