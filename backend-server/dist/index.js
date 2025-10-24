"use strict";
// import express, { Request, Response } from 'express'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//   const app = express()
//   const port = process.env.PORT || 8080
//   app.get('/', (_req: Request, res: Response) => {
//     return res.send('Welcome Siam In express server on Vercel!!')
//   })
//   app.get('/ping', (_req: Request, res: Response) => {
//     return res.send('Ping - pong 🏓')
//   })
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const db_1 = __importDefault(require("./config/db"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
(0, db_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});
// Routes
app.use("/api/movies/", movieRoutes_1.default);
app.use("/api", adminRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server runing at, ${PORT}`);
});
//# sourceMappingURL=index.js.map