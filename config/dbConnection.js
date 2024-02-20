import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_PATH);
    console.log(
      `connected to database: ${conn.connection.name} host: ${conn.connection.host}`
    );
  } catch (ex) {
    console.log(ex);
    process.exit(1);
  }
};

export default connectDB;
