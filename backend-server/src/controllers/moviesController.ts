import { Request, Response } from "express";
import movieModel from "../models/moviesModel"; 

// Create a new movie
export const createMovie = async (req: Request, res: Response) => {
  try {
    const newMovie = await movieModel.create(req.body);
    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: "Error creating movie", error });
  }
};

// Get all movies
export const getAllMovies = async (_req: Request, res: Response) => {
  try {
    const movies = await movieModel.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movies", error });
  }
};

export const getEnglishMovies = async (req: Request, res: Response) => {
  try {
    const perPage = 20;  
    const page = parseInt(req.query.page as string) || 1;
    const skip = (page - 1) * perPage;
    const totalItems = await movieModel.countDocuments({ genre: "English Movie" });
    const movies = await movieModel
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
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movies", error });
  }
};


export const getBanglaMovies = async (req: Request, res: Response) => {
  try {
    const perPage = 20;  
    const page = parseInt(req.query.page as string) || 1;
    const skip = (page - 1) * perPage;
    const totalItems = await movieModel.countDocuments({ genre: "Bangla Movie" });
    const movies = await movieModel
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
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movies", error });
  }
};

export const getHindiMovies = async (req: Request, res: Response) => {
  try {
    const perPage = 20;  
    const page = parseInt(req.query.page as string) || 1;
    const skip = (page - 1) * perPage;
    const totalItems = await movieModel.countDocuments({ genre: "Hindi Movie" });
    const movies = await movieModel
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
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movies", error });
  }
};

export const getOtherMovies = async (req: Request, res: Response) => {
  try {
    const perPage = 20;  
    const page = parseInt(req.query.page as string) || 1;
    const skip = (page - 1) * perPage;
    const totalItems = await movieModel.countDocuments({ genre: "Other Movie" });
    const movies = await movieModel
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
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movies", error });
  }
};


// Get a single movie by ID
export const getMovieById = async (req: Request, res: Response) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching movie", error });
  }
};

// Update a movie by ID
export const updateMovie = async (req: Request, res: Response) => {
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json({ message: "Error updating movie", error });
  }
};

// Delete a movie by ID
export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const deletedMovie = await movieModel.findByIdAndDelete(req.params._id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting movie", error });
  }
};
