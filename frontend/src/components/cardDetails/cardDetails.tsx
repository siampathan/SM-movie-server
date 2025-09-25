import Arrow from "../../assets/arrow.png";
import UseWindowSize from "../../hooks/useWindowSize";

import axios from "axios";
import ReactPlayer from "react-player";
import { backendUrl } from "../../App";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledNavLink } from "../../assets/style/style";

import "./cardDetails.css";

interface MovieProps {
  redirectPath: string;
}

const CardDetails: React.FC<MovieProps> = ({ redirectPath }) => {
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
    <>
      <div className="card-details">
        {error && <div className="error-message">{error}</div>}

        <div className="details-left">
          <div className="movie-poster">
            <img src={value.poster_link} alt={value.title} />
          </div>
          <div className="movie-info">
            <h2>{value.title}</h2>
            <div className="sub-content">
              <p>{value.genre}</p>
              <span></span>
              <p>{value.rating}</p>
            </div>
          </div>
        </div>

        <div className="details-right">
          <div className="trailer-sec">
            <ReactPlayer
              src={value.trailer_link}
              controls={true}
              width={playerWidth}
              height={playerHeight}
            />
          </div>

          <div className="btn">
            <StyledNavLink
              to={value.movie_link}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <img src={Arrow} alt="" />
              <button>Download</button>
            </StyledNavLink>

            <StyledNavLink to={`/${redirectPath}`} className="download-btn">
              <button>{"<< GO BACK"}</button>
            </StyledNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
