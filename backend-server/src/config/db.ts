import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const dbUrl: string | undefined = process.env.MONGODB_URL;

    if (!dbUrl) {
      throw new Error("MONGODB_URL is not defined in the environment variables.");
    }

    mongoose.connection.on("connected", () => {
      console.log("DB Connected Successfully, Siam Boss don't worry 😊!!");
    });

    await mongoose.connect(`${dbUrl}/ikare-mserver`);
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); 
  }
};

export default connectDB;
