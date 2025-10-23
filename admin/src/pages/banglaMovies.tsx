import { backendUrl } from "../App";
import MoviesComponent from "../components/movies";

interface MovieProps {
  token: string;
}

const BanglaMovies: React.FC<MovieProps> = ({ token }) => {
  return (
    <MoviesComponent
      backendUrl={backendUrl}
      movieType="bangla"
      addMoviePath="/add-movie"
      token={token}
      pageTitle="Movies"
    />
  );
};

export default BanglaMovies;
