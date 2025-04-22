import { backendUrl } from "../App";

import { postBanglaMovie } from "../API/api";
import AddMovie from "../components/addMovie";

interface MovieProps {
  token: string;
}

interface MovieFormData {}

const AddBanglaMovie: React.FC<MovieProps> = ({ token }) => {
  const handleSubmitEnglishMovie = async (formData: MovieFormData) => {
    await postBanglaMovie(backendUrl, token, formData);
  };

  return (
    <AddMovie
      onSubmit={handleSubmitEnglishMovie}
      redirectPath="/bangla-movies"
      pageTitle="ADD BANGLA MOVIE"
    />
  );
};

export default AddBanglaMovie;
