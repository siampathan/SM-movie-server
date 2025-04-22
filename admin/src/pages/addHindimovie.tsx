import { backendUrl } from "../App";

import { postHindiMovie } from "../API/api";
import AddMovie from "../components/addMovie";

interface MovieProps {
  token: string;
}

interface MovieFormData {}

const AddHindiMovie: React.FC<MovieProps> = ({ token }) => {
  const handleSubmitEnglishMovie = async (formData: MovieFormData) => {
    await postHindiMovie(backendUrl, token, formData);
  };

  return (
    <AddMovie
      onSubmit={handleSubmitEnglishMovie}
      redirectPath="/hindi-movies"
      pageTitle="ADD HINDI MOVIE"
    />
  );
};

export default AddHindiMovie;
