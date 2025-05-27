import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const { DB_URI } = process.env;

async function connectDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB successfully connected using Mongoose!");
    return mongoose.connection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

export default connectDB;
