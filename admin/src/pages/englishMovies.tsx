import { backendUrl } from "../App";
import MoviesComponent from "../components/movies";

interface MovieProps {
  token: string;
}

const EnglishMovies: React.FC<MovieProps> = ({ token }) => {
  return (
    <MoviesComponent
      backendUrl={backendUrl}
      movieType="english"
      addMoviePath="/add-english-movie"
      token={token}
      pageTitle="English Movies"
    />
  );
};

export default EnglishMovies;
