interface Type {
  movieType: string;
  count: number;
}

const EnglishMovieCount: React.FC<Type> = ({ movieType, count }) => {
  return (
    <div className="container-box">
      <h2>{movieType}</h2>
      <p>Total Movie : {count} </p>
    </div>
  );
};

export default EnglishMovieCount;
