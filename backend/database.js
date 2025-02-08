import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI; // Access the environment variable

    if (!mongoURI) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    await mongoose.connect(mongoURI); // Use the variable, not the string literal
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDatabase;
