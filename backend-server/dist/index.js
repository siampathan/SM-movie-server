"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const db_1 = __importDefault(require("./config/db"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
(0, db_1.default)();
//app.use(cors());
app.use((0, cors_1.default)({
    origin: "https://sm-movie-admin.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.options(/.*/, (0, cors_1.default)());
// const allowedOrigins = [
//   "https://sm-movie-admin.vercel.app",
//   "http://localhost:5173/"
// ];
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({ messge: "Hello, Siam WelCome to ⚓ Server 😊!!" });
});
// Routes
app.use("/api/movies", movieRoutes_1.default);
app.use("/api", adminRoutes_1.default);
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
});
app.listen(PORT, () => {
    console.log(`server runing at, ${PORT}`);
});
//# sourceMappingURL=index.js.map