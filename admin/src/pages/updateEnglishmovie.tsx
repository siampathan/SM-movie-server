import UpdateMovie from "../components/updateMovie";

interface MovieProps {
  token: string;
}

const UpdateEnglishMovie: React.FC<MovieProps> = ({ token }) => {
  return (
    <UpdateMovie
      token={token}
      movieType="English"
      redirectPath="english-movies"
    />
  );
};

export default UpdateEnglishMovie;
