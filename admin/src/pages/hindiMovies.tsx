import { backendUrl } from "../App";
import MoviesComponent from "../components/movies";

interface MovieProps {
  token: string;
}

const HindiMovies: React.FC<MovieProps> = ({ token }) => {
  return (
    <MoviesComponent
      backendUrl={backendUrl}
      movieType="hindi"
      addMoviePath="/add-hindi-movie"
      token={token}
      pageTitle="Hindi Movies"
    />
  );
};

export default HindiMovies;
