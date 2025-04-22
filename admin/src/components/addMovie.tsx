import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../assets/style/style";

interface MovieFormData {
  title: string;
  rating: string;
  poster_link: string;
  trailer_link: string;
  movie_link: string;
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
      !formData.poster_link ||
      !formData.movie_link
    ) {
      setError(
        "Title, Rating, Poster Link, and Movie Link are required fields"
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
      });

      console.log("Here is Data ", formData);

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
    <div className="add-wrap">
      <form className="form-wrap" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <p>{pageTitle}</p>

        <input
          type="text"
          className="input-field"
          placeholder="Enter Movie Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Rating (1-10)"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Poster Link"
          name="poster_link"
          value={formData.poster_link}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Trailer Link"
          name="trailer_link"
          value={formData.trailer_link}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Movie Link"
          name="movie_link"
          value={formData.movie_link}
          onChange={handleChange}
          required
        />

        <LogoutButton type="submit">
          {isLoading ? "Submitting..." : "POST Movie"}
        </LogoutButton>
      </form>
    </div>
  );
};

export default AddMovie;
