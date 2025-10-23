"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.getMovieById = exports.getOtherMovies = exports.getHindiMovies = exports.getBanglaMovies = exports.getEnglishMovies = exports.getAllMovies = exports.createMovie = void 0;
const moviesModel_1 = __importDefault(require("../models/moviesModel"));
// Create a new movie
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMovie = yield moviesModel_1.default.create(req.body);
        return res.status(201).json(newMovie);
    }
    catch (error) {
        return res.status(500).json({ message: "Error creating movie", error });
    }
});
exports.createMovie = createMovie;
// Get all movies
const getAllMovies = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield moviesModel_1.default.find();
        return res.status(200).json(movies);
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movies", error });
    }
});
exports.getAllMovies = getAllMovies;
const getEnglishMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const perPage = 20;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * perPage;
        const totalItems = yield moviesModel_1.default.countDocuments({ genre: "English Movie" });
        const movies = yield moviesModel_1.default
            .find({ genre: "English Movie" })
            .skip(skip)
            .limit(perPage);
        const totalPages = Math.ceil(totalItems / perPage);
        return res.status(200).json({
            movies,
            currentPage: page,
            totalPages,
            totalItems,
            perPage,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movies", error });
    }
});
exports.getEnglishMovies = getEnglishMovies;
const getBanglaMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const perPage = 20;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * perPage;
        const totalItems = yield moviesModel_1.default.countDocuments({ genre: "Bangla Movie" });
        const movies = yield moviesModel_1.default
            .find({ genre: "Bangla Movie" })
            .skip(skip)
            .limit(perPage);
        const totalPages = Math.ceil(totalItems / perPage);
        return res.status(200).json({
            movies,
            currentPage: page,
            totalPages,
            totalItems,
            perPage,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movies", error });
    }
});
exports.getBanglaMovies = getBanglaMovies;
const getHindiMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const perPage = 20;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * perPage;
        const totalItems = yield moviesModel_1.default.countDocuments({ genre: "Hindi Movie" });
        const movies = yield moviesModel_1.default
            .find({ genre: "Hindi Movie" })
            .skip(skip)
            .limit(perPage);
        const totalPages = Math.ceil(totalItems / perPage);
        return res.status(200).json({
            movies,
            currentPage: page,
            totalPages,
            totalItems,
            perPage,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movies", error });
    }
});
exports.getHindiMovies = getHindiMovies;
const getOtherMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const perPage = 20;
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * perPage;
        const totalItems = yield moviesModel_1.default.countDocuments({ genre: "Other Movie" });
        const movies = yield moviesModel_1.default
            .find({ genre: "Other Movie" })
            .skip(skip)
            .limit(perPage);
        const totalPages = Math.ceil(totalItems / perPage);
        return res.status(200).json({
            movies,
            currentPage: page,
            totalPages,
            totalItems,
            perPage,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movies", error });
    }
});
exports.getOtherMovies = getOtherMovies;
// Get a single movie by ID
const getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield moviesModel_1.default.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json(movie);
    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching movie", error });
    }
});
exports.getMovieById = getMovieById;
// Update a movie by ID
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedMovie = yield moviesModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json(updatedMovie);
    }
    catch (error) {
        return res.status(500).json({ message: "Error updating movie", error });
    }
});
exports.updateMovie = updateMovie;
// Delete a movie by ID
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMovie = yield moviesModel_1.default.findByIdAndDelete(req.params._id);
        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json({ message: "Movie deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting movie", error });
    }
});
exports.deleteMovie = deleteMovie;
//# sourceMappingURL=moviesController.js.map