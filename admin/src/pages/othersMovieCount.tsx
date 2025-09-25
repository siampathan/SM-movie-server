interface Type {
  movieType: string;
  count: number;
}

const OthersMovieCount: React.FC<Type> = ({ movieType, count }) => {
  return (
    <div className="container-box">
      <h2>{movieType}</h2>
      <p>Total: {count}</p>
    </div>
  );
};

export default OthersMovieCount;
