import UpdateMovie from "../components/updateMovie";

interface MovieProps {
  token: string;
}

const UpdateBanglaMovie: React.FC<MovieProps> = ({ token }) => {
  return (
    <UpdateMovie
      token={token}
      movieType="Bangla Movie"
    />
  );
};

export default UpdateBanglaMovie;
