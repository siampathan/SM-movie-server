"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUrl = process.env.MONGODB_URL;
        if (!dbUrl) {
            throw new Error("MONGODB_URL is not defined in the environment variables.");
        }
        mongoose_1.default.connection.on("connected", () => {
            console.log("DB Connected Successfully, Siam Boss don't worry 😊!!");
        });
        yield mongoose_1.default.connect(`${dbUrl}`);
    }
    catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
});
exports.default = connectDB;
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
//# sourceMappingURL=db.js.map