import UpdateMovie from "../components/updateMovie";

interface MovieProps {
  token: string;
}

const UpdateHindiMovie: React.FC<MovieProps> = ({ token }) => {
  return (
    <UpdateMovie token={token} movieType="Hindi Movie" />
  );
};

export default UpdateHindiMovie;
