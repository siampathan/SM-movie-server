import { Request, RequestHandler, Response } from "express";
import { BaseMovieService } from "../services/baseMovieService";

export abstract class BaseMovieController {
  constructor(protected readonly movieService: BaseMovieService) {}

  async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await this.movieService.getAllMovies();
      res.json(movies);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  private handleError(res: Response, error: any) {
    if (error.message === "DATA_NOT_FOUND") {
      res.status(404).json({
        status: "error",
        message: "No movies found for the requested page",
      });
    } else {
      // Keep existing error handling for other errors
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const page = Math.max(1, parseInt(req.query.page as string) || 1);
      const limit = 20;

      const result = await this.movieService.getPaginatedMovies(page, limit);
      res.json({
        status: "success",
        data: result.movies,
        pagination: {
          currentPage: result.currentPage,
          totalPages: result.totalPages,
          totalMovies: result.totalMovies,
        },
      });
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const movie = await this.movieService.getMovieById(req.params.id);
      movie ? res.json(movie) : this.notFound(res);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newMovie = await this.movieService.createMovie(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      //this.handleError(res, error, 400);
      console.log(res, error, 400);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const updated = await this.movieService.updateMovie(
        req.params.id,
        req.body
      );
      updated ? res.json(updated) : this.notFound(res);
    } catch (error) {
      //this.handleError(res, error, 400);
      console.log(res, error, 400);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const success = await this.movieService.deleteMovie(req.params.id);
      success ? res.status(204).end() : this.notFound(res);
    } catch (error) {
      this.handleError(res, error);
    }
  }

  // protected handleError(res: Response, error: unknown, statusCode = 500) {
  //   const message =
  //     error instanceof Error ? error.message : "Internal server error";
  //   res.status(statusCode).json({ error: message });
  // }

  protected notFound(res: Response) {
    res.status(404).json({ error: "Resource not found" });
  }

  static registerRoutes(
    router: any,
    path: string,
    controller: BaseMovieController,
    middleware: RequestHandler[] = []
  ) {
    router.get(`${path}/all`, controller.getAllMovies.bind(controller));
    router.get(path, controller.getAll.bind(controller));
    router.get(`${path}/:id`, controller.getById.bind(controller));
    router.post(path, ...middleware, controller.create.bind(controller));
    router.put(
      `${path}/:id`,
      ...middleware,
      controller.update.bind(controller)
    );
    router.delete(`${path}/:id`, controller.delete.bind(controller));
  }
}
