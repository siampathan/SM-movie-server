"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieController_1 = require("../controllers/movieController");
const adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
const baseMovieController_1 = require("../controllers/baseMovieController");
const router = express_1.default.Router();
// Register routes for all movie types
baseMovieController_1.BaseMovieController.registerRoutes(router, "/english-movies", new movieController_1.EnglishMovieController(), [adminMiddleware_1.default]);
baseMovieController_1.BaseMovieController.registerRoutes(router, "/hindi-movies", new movieController_1.HindiMovieController(), [adminMiddleware_1.default]);
baseMovieController_1.BaseMovieController.registerRoutes(router, "/bangla-movies", new movieController_1.BanglaMovieController(), [adminMiddleware_1.default]);
baseMovieController_1.BaseMovieController.registerRoutes(router, "/other-movies", new movieController_1.OtherMovieController(), [adminMiddleware_1.default]);
exports.default = router;
//# sourceMappingURL=movieRoutes.js.map