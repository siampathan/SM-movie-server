import express,{ Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import connectDB from './config/db';
import movieRouter from "./routes/movieRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();


const allowedOrigins = process.env.ALLOWED_ORIGINS
? process.env.ALLOWED_ORIGINS.split(",")
: [];

app.use(helmet({
  contentSecurityPolicy: false, 
   crossOriginResourcePolicy: { policy: "cross-origin" },
}));

//CORS setup
app.use(cors({
  origin: function (origin, callback) {
    console.log("Incoming origin:", origin); // For debugging
    if (!origin) {
      // Allow requests without an origin (like server-to-server or Postman)
      return callback(null, true);
    }
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      return callback(new Error(`CORS error: ${origin} not allowed`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

//app.use(cors());


app.options(/.*/, cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});

// Routes
 app.use("/api/movies", movieRouter);
 app.use("/api", adminRouter);
 app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

 app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: err.message });
});


app.listen(PORT, () => {
  console.log(`server runing at, ${PORT}`);
});
