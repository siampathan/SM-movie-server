import fs from "fs";
import csv from "csv-parser";
import { Parser } from "json2csv";
import { v4 as uuidv4 } from "uuid";

export interface Movie {
  id: string;
  title: string;
  rating: number;
  poster_link: string;
  trailer_link: string;
  movie_link: string;
}

export abstract class BaseMovieService {
  private cache = new Map<string, Movie>();
  private initialLoad = false;

  constructor(protected readonly csvFile: string) {
    this.initializeFile();
  }

  private initializeFile() {
    if (!fs.existsSync(this.csvFile)) {
      const header = "id,title,rating,poster_link,trailer_link,movie_link\n";
      fs.writeFileSync(this.csvFile, header);
    }
  }

  private async loadCache(): Promise<void> {
    if (this.initialLoad) return;

    return new Promise((resolve, reject) => {
      fs.createReadStream(this.csvFile)
        .pipe(csv())
        .on("data", (data: any) => {
          const movie: Movie = {
            id: data.id,
            title: data.title,
            rating: parseFloat(data.rating),
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
  }

  private async persistCache(): Promise<void> {
    const parser = new Parser({
      fields: [
        "id",
        "title",
        "rating",
        "poster_link",
        "trailer_link",
        "movie_link",
      ],
    });
    const csvData = parser.parse(Array.from(this.cache.values()));
    fs.writeFileSync(this.csvFile, csvData);
  }

  async getAllMovies(): Promise<Movie[]> {
    await this.loadCache();
    return Array.from(this.cache.values());
  }

  async getPaginatedMovies(
    page: number,
    limit: number
  ): Promise<{
    movies: Movie[];
    totalPages: number;
    currentPage: number;
    totalMovies: number;
  }> {
    await this.loadCache();
    const allMovies = Array.from(this.cache.values());
    const totalMovies = allMovies.length;
    const totalPages = Math.ceil(totalMovies / limit);

    if (totalMovies === 0 || page < 1 || page > totalPages) {
      throw new Error("DATA_NOT_FOUND");
    }

    // const validatedPage = Math.max(1, Math.min(page, totalPages || 1));
    // const startIndex = (validatedPage - 1) * limit;
    // const endIndex = startIndex + limit;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const movies = allMovies.slice(startIndex, endIndex);

    if (movies.length === 0) {
      throw new Error("DATA_NOT_FOUND");
    }

    // return {
    //   movies: allMovies.slice(startIndex, endIndex),
    //   totalPages,
    //   currentPage: validatedPage,
    //   totalMovies,
    // };
    return {
      movies,
      totalPages,
      currentPage: page,
      totalMovies,
    };
  }

  async getMovieById(id: string): Promise<Movie | undefined> {
    await this.loadCache();
    return this.cache.get(id);
  }

  async createMovie(movie: Omit<Movie, "id">): Promise<Movie> {
    await this.loadCache();
    const newMovie = { ...movie, id: uuidv4() };
    this.cache.set(newMovie.id, newMovie);
    await this.persistCache();
    return newMovie;
  }

  async updateMovie(id: string, update: Partial<Movie>): Promise<Movie | null> {
    await this.loadCache();
    const existing = this.cache.get(id);
    if (!existing) return null;

    const updatedMovie = { ...existing, ...update };
    this.cache.set(id, updatedMovie);
    await this.persistCache();
    return updatedMovie;
  }

  async deleteMovie(id: string): Promise<boolean> {
    await this.loadCache();
    const existed = this.cache.delete(id);
    if (existed) await this.persistCache();
    return existed;
  }
}
