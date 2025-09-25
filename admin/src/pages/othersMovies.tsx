import { backendUrl } from "../App";
import MoviesComponent from "../components/movies";

interface MovieProps {
  token: string;
}

const OtherMovies: React.FC<MovieProps> = ({ token }) => {
  return (
    <MoviesComponent
      backendUrl={backendUrl}
      movieType="other"
      addMoviePath="/add-other-movie"
      token={token}
      pageTitle="Other Movies"
    />
  );
};

export default OtherMovies;
