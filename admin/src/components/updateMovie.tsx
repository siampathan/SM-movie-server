import {
  AddWrap,
  FormWrap,
  LogoutButton,
  StyledInput,
} from "../assets/style/style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { backendUrl } from "../App";

interface MovieUpdateProps {
  movieType: string;
  token: any;
}

const UpdateMovie: React.FC<MovieUpdateProps> = ({
  token,
  movieType,
}) => {

  const [values, setValues] = useState({
    title: "",
    rating: "",
    genre: "",
    poster_link: "",
    trailer_link: "",
    movie_link: "",
    type_video: ""
  });
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        
      console.log("Fetching movie with ID:", id);
      console.log("Backend URL:", backendUrl);

        const response = await axios.get(
          `${backendUrl}/api/movies/${id}`
        );
        const movieData = response.data;
        setValues({
          ...movieData,
          rating: movieData.rating,
        });
      } catch (err) {
        console.error("Failed to fetch movie:", err);
        setError("Failed to load movie data.");
      }
    };

    fetchMovie();
  }, [id, token]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      ...values,
      rating: values.rating,
    };

    try {
      await axios.put(`${backendUrl}/api/movies/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      navigate(`/`);
      console.log(values);
    } catch (err: any) {
      console.error(err);
      setError("Failed to update movie. Please try again.");
    }
  };
  
  

  return (
    <AddWrap>
      <FormWrap onSubmit={handleSubmit}>
        <p>Update {movieType} Movie Info</p>
        {error && <div className="error-message">{error}</div>}

        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Movie Title"
          name="title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Duration"
          name="rating"
          value={values.rating}
          onChange={(e) => setValues({ ...values, rating: e.target.value })}
          required
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Category"
          name="genre"
          value={values.genre}
          onChange={(e) => setValues({ ...values, genre: e.target.value })}
          required
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Category"
          name="type_video"
          value={values.type_video}
          onChange={(e) => setValues({ ...values, genre: e.target.value })}
          required
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Poster Link"
          name="poster_link"
          value={values.poster_link}
          onChange={(e) =>
            setValues({ ...values, poster_link: e.target.value })
          }
          required
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Trailer Link"
          name="trailer_link"
          value={values.trailer_link}
          onChange={(e) =>
            setValues({ ...values, trailer_link: e.target.value })
          }
        />
        <StyledInput
          type="text"
          className="input-field"
          placeholder="Enter Movie Link"
          name="movie_link"
          value={values.movie_link}
          onChange={(e) => setValues({ ...values, movie_link: e.target.value })}
          required
        />

        <LogoutButton type="submit">Update</LogoutButton>
      </FormWrap>
    </AddWrap>
  );
};

export default UpdateMovie;
