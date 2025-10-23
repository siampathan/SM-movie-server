import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogoutButton,
  AddWrap,
  FormWrap,
  FormTitle,
  ErrorMessage,
  SuccessMessage,
  StyledInput,
} from "../assets/style/style";

interface MovieFormData {
  title: string;
  rating: string;
  poster_link: string;
  trailer_link: string;
  movie_link: string;
  genre: string;
  type_video: string;
}

interface AddMovieProps {
  onSubmit: (formData: MovieFormData) => Promise<void>;
  redirectPath?: string;
  pageTitle: string;
}

const AddMovie = ({
  onSubmit,
  redirectPath = "/",
  pageTitle,
}: AddMovieProps) => {
  const [formData, setFormData] = useState<MovieFormData>({
    title: "",
    rating: "",
    poster_link: "",
    trailer_link: "",
    movie_link: "",
    genre: "",
    type_video: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.title ||
      !formData.rating ||
      !formData.genre ||
      !formData.poster_link ||
      !formData.movie_link ||
      !formData.trailer_link ||
      !formData.type_video 
    ) {
      setError(
        "Input field are required fields"
      );
      return;
    }

    try {
      setIsLoading(true);
      await onSubmit(formData);
      setSuccess("Movie added successfully!");
      setFormData({
        title: "",
        rating: "",
        poster_link: "",
        trailer_link: "",
        movie_link: "",
        genre: "",
        type_video: ""
      });

     // console.log("Here is Data ", formData);

      if (redirectPath) {
        setTimeout(() => navigate(redirectPath), 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit movie");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AddWrap>
      <FormWrap onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <FormTitle>{pageTitle}</FormTitle>

        <StyledInput
          type="text"
          placeholder="Enter Movie Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          placeholder="Enter Duration"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          placeholder="Enter Category"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          placeholder="Enter Type Of Video"
          name="type_video"
          value={formData.type_video}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          placeholder="Enter Poster Link"
          name="poster_link"
          value={formData.poster_link}
          onChange={handleChange}
          required
        />
        <StyledInput
          type="text"
          placeholder="Enter Trailer Link"
          name="trailer_link"
          value={formData.trailer_link}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          placeholder="Enter Movie Link"
          name="movie_link"
          value={formData.movie_link}
          onChange={handleChange}
          required
        />

        <LogoutButton type="submit">
          {isLoading ? "Submitting..." : "POST Movie"}
        </LogoutButton>
      </FormWrap>
    </AddWrap>
  );
};

export default AddMovie;
