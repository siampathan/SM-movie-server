import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";

export const useMovies = (moviesType: string) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/movies/${moviesType}?limit=5`);
        setMovies(res.data.movies);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [moviesType]);

  return { movies, loading, error };
};
