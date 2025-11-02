import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from './config/db';
import movieRouter from "./routes/movieRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();

//app.use(cors());

app.use(cors({
  origin: "https://sm-movie-admin.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
} ));

app.options(/.*/, cors());

// const allowedOrigins = [
//   "https://sm-movie-admin.vercel.app",
//   "http://localhost:5173/"
// ];

app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});

// Routes
 app.use("/api/movies", movieRouter);
 app.use("/api", adminRouter);

 app.use((err:any, req:any, res:any, next:any) => {
  console.error("Error:", err);
  res.status(500).json({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
