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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add custom methods to the model
experiencesSchema.methods.formatPeriod = function () {
  // Example of a custom method
  return this.period.replace("-", " to ");
};

// Pre-save middleware
experiencesSchema.pre("save", function (next) {
  // Example: convert title to capitalized
  if (this.title) {
    this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
  }
  next();
});

const Experiences = mongoose.model("Experiences", experiencesSchema);

export default Experiences;
