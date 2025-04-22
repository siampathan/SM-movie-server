import UpdateMovie from "../components/updateMovie";

interface MovieProps {
  token: string;
}

const UpdateOtherMovie: React.FC<MovieProps> = ({ token }) => {
  return (
    <UpdateMovie token={token} movieType="Hindi" redirectPath="other-movies" />
  );
};

export default UpdateOtherMovie;
