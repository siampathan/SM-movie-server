import express from "express";
import cors from "cors";
import "dotenv/config";
import movieRouter from "./routes/movieRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ messge: "Hello, Siam WelCome to Express Server" });
});

// Routes
 app.use("/api", movieRouter);
 app.use("/api", adminRouter);

 export default app;


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
