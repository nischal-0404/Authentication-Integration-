import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/contactmanagement");
    console.log(`MongoDB connected: ${conn.connection.host} / ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB initial connection error: ${error.message}`);
    process.exit(1); // Exit process if initial connection fails
  }

  // Listen for connection events
  mongoose.connection.on("connected", () => {
    console.log("MongoDB event: connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error(`MongoDB event: connection error - ${err.message}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB event: disconnected");
  });
};

export default connectDB;
