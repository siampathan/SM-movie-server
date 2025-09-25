import axios from "axios";

import { useState, useEffect, useCallback } from "react";

import Pagination from "../pagination/pagination";
import { MovieType, StyledNavLink } from "../../assets/style/style";

import Arrow from "../../assets/arrow.png";
import PlayBtn from "../../assets/play.png";

interface MovieTypes {
  id: string;
  title: string;
  poster_link: string;
  rating: string;
  genre: string;
  movie_link: string;
}

interface MovieListProps {
  backendUrl: string;
  movieType: "english" | "hindi" | "bangla" | "other";
  addMoviePath: string;
  searchTerm: string;
  isSearching: boolean;
  onTotalMoviesChange: (total: number) => void;
}

const MovieList = ({
  backendUrl,
  movieType,
  addMoviePath,
  searchTerm,
  isSearching,
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
        ? `${backendUrl}/api/${movieType}-movies/all`
        : `${backendUrl}/api/${movieType}-movies?page=${page}`;
      const response = await axios.get(url);

      if (isSearching) {
        const allMovies = response.data.data || response.data;
        setMovies(allMovies);
        setTotalMovies(allMovies.length);
        onTotalMoviesChange(allMovies.length);
      } else {
        setMovies(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setTotalMovies(response.data.pagination.totalMovies);
        onTotalMoviesChange(response.data.pagination.totalMovies);
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
        <>
          <MovieType>
            <h2> {movieType} </h2>
          </MovieType>
          <div className="card-list">
            {filteredMovies.map((movie) => (
              <div className="card-container" key={movie.id}>
                <div className="buttons">
                  <StyledNavLink
                    to={movie.movie_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="down-button"
                  >
                    <img src={Arrow} alt="" />
                  </StyledNavLink>

                  <StyledNavLink
                    to={`/${addMoviePath}/${movieType}/${movie.id}`}
                    className="play-button"
                  >
                    <img src={PlayBtn} alt="" />
                  </StyledNavLink>
                </div>

                <StyledNavLink to={`/${addMoviePath}/${movieType}/${movie.id}`}>
                  <img src={movie.poster_link} alt="background" />
                  <div className="content-sec">
                    <h2>{movie.title}</h2>
                    <div className="sub-content">
                      <p>{movie.genre}</p>
                      <span></span>
                      <p>{movie.rating}</p>
                    </div>
                  </div>
                </StyledNavLink>
              </div>
            ))}
          </div>
        </>
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
