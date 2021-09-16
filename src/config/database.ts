import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/zfarming_db";

async function connect() {
  try {
    await mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {});
    console.log("DB=> conected");
  } catch {
    console.log("DB=> unconected");
  }
}

export default connect;
