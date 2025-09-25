import Movies from "../components/movies/movies";
import { backendUrl } from "../App";

const EnglishMovies = () => {
  return (
    <Movies
      backendUrl={backendUrl}
      movieType="english"
      addMoviePath="english-movies"
      pageTitle="English Movies"
    />
  );
};

export default EnglishMovies;
