import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { LogoutButton } from "../assets/style/style";
import MovieList from "./movieList";
import { FilterContainer, Input } from "../assets/style/style";

interface MoviesComponentProps {
  backendUrl: string;
  movieType: "english" | "hindi" | "bangla" | "other";
  addMoviePath: string;
  pageTitle: string;
  token: any;
  onPageChange?: (newPage: number) => void;
}

const MoviesComponent = ({
  backendUrl,
  movieType,
  addMoviePath,
  pageTitle,
}: MoviesComponentProps) => {
  const [searchField, setSearchField] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchField.trim()) {
      setIsSearching(true);
    }
  };

  useEffect(() => {
    if (searchField === "") {
      setIsSearching(false);
    }
  }, [searchField]);

  return (
    <div className="movies-wrap">
      <div className="top-sec">
        <div className="top-bar">
          <Link to={addMoviePath}>
            <LogoutButton> Add Movie </LogoutButton>
          </Link>
          <FilterContainer>
            <Input
              type="text"
              placeholder="Enter Movie Name"
              value={searchField}
              onChange={onSearchChange}
            />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={handleSearchClick}
              style={{ cursor: "pointer" }}
            />
          </FilterContainer>
        </div>
        <span>
          Total {totalMovies} {pageTitle}
        </span>
      </div>

      <MovieList
        backendUrl={backendUrl}
        movieType={movieType}
        searchTerm={searchField}
        isSearching={isSearching}
        onTotalMoviesChange={setTotalMovies}
        token={undefined}
      />
    </div>
  );
};

export default MoviesComponent;
