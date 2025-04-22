import { backendUrl } from "../App";

import { postEnglishMovie } from "../API/api";
import AddMovie from "../components/addMovie";

interface MovieProps {
  token: string;
}

interface MovieFormData {}

const AddEnglishMovie: React.FC<MovieProps> = ({ token }) => {
  const handleSubmitEnglishMovie = async (formData: MovieFormData) => {
    await postEnglishMovie(backendUrl, token, formData);
  };

  return (
    <AddMovie
      onSubmit={handleSubmitEnglishMovie}
      redirectPath="/english-movies"
      pageTitle="ADD ENGLISH MOVIE"
    />
  );
};

export default AddEnglishMovie;
