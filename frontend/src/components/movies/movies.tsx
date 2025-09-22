import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FilterContainer, Input } from "../../assets/style/style";

import MovieList from "../moviesList/moviesList";
import "./movies.css";

interface MoviesComponentProps {
  backendUrl: string;
  movieType: "english" | "hindi" | "bangla" | "other";
  addMoviePath: string;
  pageTitle: string;
  onPageChange?: (newPage: number) => void;
}

const Movies = ({ backendUrl, movieType,addMoviePath }: MoviesComponentProps) => {
  const [searchField, setSearchField] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [, setTotalMovies] = useState(0);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  };

  const triggerSearch = () => {
    const trimmedSearch = searchField.trim();

    if (trimmedSearch === "") {
      setSearchTerm("");
      setIsSearching(false);
    } else {
      setSearchTerm(trimmedSearch);
      setIsSearching(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      triggerSearch();
    }
  };

  useEffect(() => {
    if (searchField.trim() === "") {
      setSearchTerm("");
      setIsSearching(false);
    }
  }, [searchField]);

  return (
    <>
      <FilterContainer>
        <Input
          type="text"
          placeholder="Enter Movie Name"
          value={searchField}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
        />
        <FontAwesomeIcon
          icon={faSearch}
          onClick={triggerSearch}
          style={{ cursor: "pointer", color: "white" }}
        />
      </FilterContainer>

      <MovieList
        backendUrl={backendUrl}
        movieType={movieType}
        searchTerm={searchTerm}
        isSearching={isSearching}
        onTotalMoviesChange={setTotalMovies}
        addMoviePath = {addMoviePath}
      />
    </>
  );
};

export default Movies;
