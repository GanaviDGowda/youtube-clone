import mongoose from "mongoose";
import { DB_name } from "../constants.js";
import dotenv from "dotenv";
dotenv.config("./.env");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_name}`
    );
    console.log(
      `Connected to the database !! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};
export default connectDB;
