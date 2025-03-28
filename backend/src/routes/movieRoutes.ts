import express from "express";
import {
  EnglishMovieController,
  HindiMovieController,
  BanglaMovieController,
  OtherMovieController,
} from "../controllers/movieController";
import adminAuth from "../middleware/adminMiddleware";
import { BaseMovieController } from "../controllers/baseMovieController";

const router = express.Router();

// Register routes for all movie types
BaseMovieController.registerRoutes(
  router,
  "/english-movies",
  new EnglishMovieController(),
  [adminAuth]
);

BaseMovieController.registerRoutes(
  router,
  "/hindi-movies",
  new HindiMovieController()
);

BaseMovieController.registerRoutes(
  router,
  "/bangla-movies",
  new BanglaMovieController()
);

BaseMovieController.registerRoutes(
  router,
  "/other-movies",
  new OtherMovieController()
);

export default router;
