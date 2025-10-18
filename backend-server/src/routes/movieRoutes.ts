import express from "express";
import {
  EnglishMovieController,
  HindiMovieController,
  BanglaMovieController,
  OtherMovieController,
} from "../controllers/movieController";
import adminAuth from "../middlewares/adminMiddleware";
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
  new HindiMovieController(),
  [adminAuth]
);

BaseMovieController.registerRoutes(
  router,
  "/bangla-movies",
  new BanglaMovieController(),
  [adminAuth]
);

BaseMovieController.registerRoutes(
  router,
  "/other-movies",
  new OtherMovieController(),
  [adminAuth]
);

export default router;
