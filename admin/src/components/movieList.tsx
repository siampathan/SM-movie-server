import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "./pagination";
import { StyledNavLink } from "../assets/style/style";

interface MovieTypes {
  _id: string;
  title: string;
  poster_link: string;
  rating: string;
}

interface MovieListProps {
  backendUrl: string;
  movieType: "english" | "hindi" | "bangla" | "other";
  searchTerm: string;
  isSearching: boolean;
  token: any;
  onTotalMoviesChange: (total: number) => void;
}

const MovieList = ({
  backendUrl,
  movieType,
  searchTerm,
  isSearching,
  token,
  onTotalMoviesChange,
}: MovieListProps) => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [, setTotalMovies] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState<MovieTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const url = isSearching
        ? `${backendUrl}/api/movies/${movieType}-movies/`
        : `${backendUrl}/api/movies/${movieType}-movies?page=${page}`;
      const response = await axios.get(url);
      
      console.log("Response data:", response.data);
      console.log("Full response object:", response);

      const { movies, totalPages, totalItems } = response.data;

    

      if (isSearching) {
        const allMovies = response.data.data || response.data;
        setMovies(allMovies);
        setTotalMovies(allMovies.length);
        onTotalMoviesChange(allMovies.length);
      } else {
        setMovies(movies || []);
        setTotalPages(totalPages || 1);
        setTotalMovies(totalItems || 0);
        onTotalMoviesChange(totalItems || 0);
      }
    } catch (error) {
      console.error(`Error fetching ${movieType} movies:`, error);
    } finally {
      setIsLoading(false);
    }
  }, [page, backendUrl, isSearching, movieType, onTotalMoviesChange]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleDeleteMovie = async (movieId: string) => {
    console.log("click by ", movieId);
    
    if (!window.confirm("Are you sure you want to delete this movie?")) return;
   
    setIsLoading(true);
    
    try {
      await axios.delete(`${backendUrl}/api/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await fetchMovies();

      if (isSearching) {
        const newMovies = movies.filter((movie) => movie._id !== movieId);
        setMovies(newMovies);
      }

      alert("Movie deleted successfully!");
      location.reload();
    } catch (error) {
      alert("Failed to delete movie. Please try again.");
      console.error("Error deleting movie:", error);
    }
  };

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredMovies(newFilteredMovies);
  }, [movies, searchTerm]);

  useEffect(() => {
    if (isSearching) {
      setPage(1);
    }
  }, [isSearching]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <table className="movies-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Cover</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td className="movie-poster">
                  <img src={movie.poster_link} alt={movie.title} />
                </td>
                <td>{movie.rating || "Rating"}</td>
                <td className="action">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTrash}
                    onClick={() =>  handleDeleteMovie(movie._id)}
                  />

                  <StyledNavLink to={`/update-movie/${movieType}/${movie._id}`}>
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                  </StyledNavLink>
                  <StyledNavLink to={`/movie-details/${movieType}/${movie._id}`}>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                  </StyledNavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MovieList;
