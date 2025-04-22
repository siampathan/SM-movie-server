import { backendUrl } from "../App";

import { postOtherMovie } from "../API/api";
import AddMovie from "../components/addMovie";

interface MovieProps {
  token: string;
}

interface MovieFormData {}

const AddOtherMovie: React.FC<MovieProps> = ({ token }) => {
  const handleSubmitEnglishMovie = async (formData: MovieFormData) => {
    await postOtherMovie(backendUrl, token, formData);
  };

  return (
    <AddMovie
      onSubmit={handleSubmitEnglishMovie}
      redirectPath="/others-movie"
      pageTitle="ADD OTHER MOVIE"
    />
  );
};

export default AddOtherMovie;
