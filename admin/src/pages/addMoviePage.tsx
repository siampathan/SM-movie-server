import { backendUrl } from "../App";

import { postMovie } from "../API/api";
import AddMovie from "../components/addMovie";

interface MovieProps {
  token: string;
}

interface MovieFormData {}

const AddMoviePage: React.FC<MovieProps> = ({ token }) => {
  const handleSubmitEnglishMovie = async (formData: MovieFormData) => {
    await postMovie(backendUrl, token, formData);
  };

  return (
    <AddMovie
      onSubmit={handleSubmitEnglishMovie}
      redirectPath="/"
      pageTitle="ADD MOVIE"
    />
  );
};

export default AddMoviePage;
