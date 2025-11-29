import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    isConnected = db.connections[0].readyState;

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB connection error:", error);
  }
};

export default connect;
