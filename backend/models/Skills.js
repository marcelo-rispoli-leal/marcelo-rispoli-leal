import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
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
  skills: {
    type: [String],
    required: [true, "Skills array is required"],
  },
});

const Skills = mongoose.model("Skills", skillsSchema);

export default Skills;
