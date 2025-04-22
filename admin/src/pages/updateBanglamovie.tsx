import UpdateMovie from "../components/updateMovie";

interface MovieProps {
  token: string;
}

const UpdateBanglaMovie: React.FC<MovieProps> = ({ token }) => {
  return (
    <UpdateMovie
      token={token}
      movieType="Bangla"
      redirectPath="bangla-movies"
    />
  );
};

export default UpdateBanglaMovie;
