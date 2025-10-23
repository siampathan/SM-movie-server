"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesController_1 = require("../controllers/moviesController");
const adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
const router = express_1.default.Router();
router.post('/', adminMiddleware_1.default, moviesController_1.createMovie);
router.get('/', adminMiddleware_1.default, moviesController_1.getAllMovies);
router.get("/english-movies", moviesController_1.getEnglishMovies);
router.get("/hindi-movies", moviesController_1.getHindiMovies);
router.get("/bangla-movies", moviesController_1.getBanglaMovies);
router.get("/other-movies", moviesController_1.getOtherMovies);
router.get('/:id', moviesController_1.getMovieById);
router.put('/:id', adminMiddleware_1.default, moviesController_1.updateMovie);
router.delete('/:id', adminMiddleware_1.default, moviesController_1.deleteMovie);
exports.default = router;
//# sourceMappingURL=movieRoutes.js.map