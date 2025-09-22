import axios from "axios";
import ReactPlayer from "react-player/lazy";
import { backendUrl } from "../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LogoutButton, StyledNavLink } from "../assets/style/style";
import UseWindowSize from "../hooks/useWindowSize";

interface MovieProps {
  movieType: string;
  redirectPath: string;
}

const MovieDetails: React.FC<MovieProps> = ({ movieType, redirectPath }) => {

  const { width } = UseWindowSize();

  let playerWidth = "640px";
  let playerHeight = "360px";

  if (width <= 928) {
    playerWidth = "400px";
    playerHeight = "250px";
  }

  if (width <= 660) {
    playerWidth = "350px";
    playerHeight = "250px";
  }

  const [value, setValues] = useState({
    title: "",
    rating: "",
    genre: "",
    poster_link: "",
    trailer_link: "",
    movie_link: "",
  });

  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/${redirectPath}/${id}`
        );
        const movieData = response.data;
        
        setValues({
          ...movieData,
        });
      } catch (err) {
        console.error("Failed to fetch movie:", err);
        setError("Failed to load movie data.");
      }
    };

    fetchMovie();
  }, [id, redirectPath]);

  return (
    <div className="movie-details">
      {error && <div className="error-message">{error}</div>}

      <h1> {movieType} Movie Details </h1>

      <div className="data-wrap">
        <div className="poster-wrap">
          <img src={value.poster_link} alt={value.title} />
        </div>

        <div className="trailer-wrap">
          <ReactPlayer
            url={value.trailer_link}
            controls={true}
            width={playerWidth}
            height={playerHeight}
          />
        </div>
      </div>

      <div className="content">
        <h2> {value.title} </h2>
        <h3> Duration: {value.rating} </h3>
        <h3>{value.genre}</h3>
      </div>

      <StyledNavLink to={value.movie_link}>
        <LogoutButton>MOVIE LINK</LogoutButton>
      </StyledNavLink>
    </div>
  );
};

export default MovieDetails;
