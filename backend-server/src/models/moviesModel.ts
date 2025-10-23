import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMovies extends Document {
  title: string;
  rating: string;
  poster_link: string;
  trailer_link: string; 
  movie_link: string;
  genre:string;
  type_video: string;
}

const moviesSchema: Schema<IMovies> = new Schema({
  title: { type: String, required: true },
  rating: { type: String, required: true },
  poster_link: { type: String, required: true },
  trailer_link: { type: String, required: true }, 
  movie_link: { type: String, required: true },
  genre: { type: String, required: true }, 
  type_video: { type: String, required: true },
});

const movieModel: Model<IMovies> =
  (mongoose.models.product as Model<IMovies>) ||
  mongoose.model<IMovies>("movie", moviesSchema);

export default movieModel;
