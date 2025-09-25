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
      addMoviePath="/add-bangla-movie"
      token={token}
      pageTitle="Bangla Movies"
    />
  );
};

export default BanglaMovies;
