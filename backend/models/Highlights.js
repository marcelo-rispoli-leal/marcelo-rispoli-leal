import mongoose from "mongoose";

const highlightsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  iconName: {
    type: String,
    required: [true, "Icon name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
});

const Highlights = mongoose.model("Highlights", highlightsSchema);

export default Highlights;
