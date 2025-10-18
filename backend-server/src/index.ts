// import express, { Request, Response } from 'express'

//   const app = express()
//   const port = process.env.PORT || 8080

//   app.get('/', (_req: Request, res: Response) => {
//     return res.send('Welcome Siam In express server on Vercel!!')
//   })

//   app.get('/ping', (_req: Request, res: Response) => {
//     return res.send('Ping - pong 🏓')
//   })

//   app.listen(port, () => {
//     return console.log(`Server is listening on ${port}`)
//   })

import express from "express";
import cors from "cors";
import "dotenv/config";
import movieRouter from "./routes/movieRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server" });
});

// Routes
 app.use("/api", movieRouter);
 app.use("/api", adminRouter);


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
