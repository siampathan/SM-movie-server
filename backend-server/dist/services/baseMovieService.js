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
exports.BaseMovieService = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const json2csv_1 = require("json2csv");
//import { v4 as uuidv4 } from "uuid";
const crypto_1 = __importDefault(require("crypto"));
class BaseMovieService {
    constructor(csvFile) {
        this.csvFile = csvFile;
        this.cache = new Map();
        this.initialLoad = false;
        this.initializeFile();
    }
    initializeFile() {
        if (!fs_1.default.existsSync(this.csvFile)) {
            const header = "id,title,rating,poster_link,trailer_link,movie_link\n";
            fs_1.default.writeFileSync(this.csvFile, header);
        }
    }
    loadCache() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialLoad)
                return;
            return new Promise((resolve, reject) => {
                fs_1.default.createReadStream(this.csvFile)
                    .pipe((0, csv_parser_1.default)())
                    .on("data", (data) => {
                    const movie = {
                        id: data.id,
                        title: data.title,
                        rating: data.rating,
                        genre: data.genre,
                        poster_link: data.poster_link,
                        trailer_link: data.trailer_link,
                        movie_link: data.movie_link,
                    };
                    this.cache.set(movie.id, movie);
                })
                    .on("end", () => {
                    this.initialLoad = true;
                    resolve();
                })
                    .on("error", reject);
            });
        });
    }
    persistCache() {
        return __awaiter(this, void 0, void 0, function* () {
            const parser = new json2csv_1.Parser({
                fields: [
                    "id",
                    "title",
                    "rating",
                    "genre",
                    "poster_link",
                    "trailer_link",
                    "movie_link",
                ],
            });
            const csvData = parser.parse(Array.from(this.cache.values()));
            fs_1.default.writeFileSync(this.csvFile, csvData);
        });
    }
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            return Array.from(this.cache.values());
        });
    }
    getPaginatedMovies(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            const allMovies = Array.from(this.cache.values());
            const totalMovies = allMovies.length;
            const totalPages = Math.ceil(totalMovies / limit);
            if (totalMovies === 0 || page < 1 || page > totalPages) {
                throw new Error("DATA_NOT_FOUND");
            }
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const movies = allMovies.slice(startIndex, endIndex);
            if (movies.length === 0) {
                throw new Error("DATA_NOT_FOUND");
            }
            return {
                movies,
                totalPages,
                currentPage: page,
                totalMovies,
            };
        });
    }
    getMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            return this.cache.get(id);
        });
    }
    createMovie(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            const newMovie = Object.assign(Object.assign({}, movie), { id: crypto_1.default.randomUUID() });
            this.cache.set(newMovie.id, newMovie);
            yield this.persistCache();
            return newMovie;
        });
    }
    updateMovie(id, update) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            const existing = this.cache.get(id);
            if (!existing)
                return null;
            const updatedMovie = Object.assign(Object.assign({}, existing), update);
            this.cache.set(id, updatedMovie);
            yield this.persistCache();
            return updatedMovie;
        });
    }
    deleteMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadCache();
            const existed = this.cache.delete(id);
            if (existed)
                yield this.persistCache();
            return existed;
        });
    }
}
exports.BaseMovieService = BaseMovieService;
//# sourceMappingURL=baseMovieService.js.map