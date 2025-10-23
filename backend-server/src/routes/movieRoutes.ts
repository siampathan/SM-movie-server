import express from 'express';
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getEnglishMovies,
  getHindiMovies,
  getBanglaMovies,
  getOtherMovies,
} from '../controllers/moviesController';
import adminAuth from '../middlewares/adminMiddleware';

const router = express.Router();

router.post('/', adminAuth , createMovie);
router.get('/', adminAuth , getAllMovies);

router.get("/english-movies", getEnglishMovies);
router.get("/hindi-movies", getHindiMovies);
router.get("/bangla-movies", getBanglaMovies);
router.get("/other-movies", getOtherMovies);

router.get('/:id', getMovieById);
router.put('/:id',adminAuth, updateMovie);
router.delete('/:id',adminAuth, deleteMovie);

export default router;
