// import express, { Request, Response } from 'express'

//   const app = express()
//   const port = process.env.PORT || 8080

//   app.get('/', (_req: Request, res: Response) => {
//     return res.send('Welcome Siam In express server on Vercel!!')
//   })

//   app.get('/ping', (_req: Request, res: Response) => {
//     return res.send('Ping - pong 🏓')
//   })

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from './config/db';
import movieRouter from "./routes/movieRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();

app.use(cors({
  origin: "https://sm-movie-admin.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
} ));

//https://sm-movie-admin.vercel.app

//Vercel-ready Express + MongoDB + CORS setup

app.use(express.json());
//app.options("/*", cors());


app.get("/", (req, res) => {
  res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});

// Routes
 app.use("/api/movies/", movieRouter);
 app.use("/api", adminRouter);

 app.use((err:any, req:any, res:any, next:any) => {
  console.error("Error:", err);
  res.status(500).json({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
