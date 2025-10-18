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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMovieController = void 0;
class BaseMovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield this.movieService.getAllMovies();
                res.json(movies);
            }
            catch (error) {
                this.handleError(res, error);
            }
        });
    }
    handleError(res, error) {
        if (error.message === "DATA_NOT_FOUND") {
            res.status(404).json({
                status: "error",
                message: "No movies found for the requested page",
            });
        }
        else {
            // Keep existing error handling for other errors
            res.status(500).json({
                status: "error",
                message: "Internal server error",
                details: process.env.NODE_ENV === "development" ? error.message : undefined,
            });
        }
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = Math.max(1, parseInt(req.query.page) || 1);
                const limit = 20;
                const result = yield this.movieService.getPaginatedMovies(page, limit);
                res.json({
                    status: "success",
                    data: result.movies,
                    pagination: {
                        currentPage: result.currentPage,
                        totalPages: result.totalPages,
                        totalMovies: result.totalMovies,
                    },
                });
            }
            catch (error) {
                this.handleError(res, error);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield this.movieService.getMovieById(req.params.id);
                movie ? res.json(movie) : this.notFound(res);
            }
            catch (error) {
                this.handleError(res, error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield this.movieService.createMovie(req.body);
                res.status(201).json(newMovie);
            }
            catch (error) {
                //this.handleError(res, error, 400);
                console.log(res, error, 400);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield this.movieService.updateMovie(req.params.id, req.body);
                updated ? res.json(updated) : this.notFound(res);
            }
            catch (error) {
                //this.handleError(res, error, 400);
                console.log(res, error, 400);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield this.movieService.deleteMovie(req.params.id);
                success ? res.status(204).end() : this.notFound(res);
            }
            catch (error) {
                this.handleError(res, error);
            }
        });
    }
    // protected handleError(res: Response, error: unknown, statusCode = 500) {
    //   const message =
    //     error instanceof Error ? error.message : "Internal server error";
    //   res.status(statusCode).json({ error: message });
    // }
    notFound(res) {
        res.status(404).json({ error: "Resource not found" });
    }
    static registerRoutes(router, path, controller, middleware = []) {
        router.get(`${path}/all`, controller.getAllMovies.bind(controller));
        router.get(path, controller.getAll.bind(controller));
        router.get(`${path}/:id`, controller.getById.bind(controller));
        router.post(path, ...middleware, controller.create.bind(controller));
        router.put(`${path}/:id`, ...middleware, controller.update.bind(controller));
        router.delete(`${path}/:id`, controller.delete.bind(controller));
    }
}
exports.BaseMovieController = BaseMovieController;
//# sourceMappingURL=baseMovieController.js.map