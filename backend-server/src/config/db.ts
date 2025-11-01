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

    await mongoose.connect(`${dbUrl}`);
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); 
  }
};

export default connectDB;

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URL;

// if (!uri) {
//   throw new Error("❌ MONGODB_URL is not defined in environment variables.");
// }

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const connectDB = async (): Promise<void> => {
//   try {
//     // Connect to MongoDB cluster
//     await client.connect();

//     // Optional: ping the admin DB to confirm connection
//     await client.db("admin").command({ ping: 1 });

//     console.log("✅ Pinged your deployment — successfully connected to MongoDB!");
//   } catch (error) {
//     console.error("❌ Database connection error:", error);
//     process.exit(1);
//   } finally {
//     // You can choose to keep the connection open for the lifetime of the app
//     // Comment out the following line if you want a persistent connection
//     // await client.close();
//   }
// };

// export default connectDB;
// export { client };

