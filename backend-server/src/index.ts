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

app.options("*", cors());

// app.use(cors({
//   origin: 'http://localhost:5173/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// } ));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});

// Routes
 app.use("/api/movies/", movieRouter);
 app.use("/api", adminRouter);


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
