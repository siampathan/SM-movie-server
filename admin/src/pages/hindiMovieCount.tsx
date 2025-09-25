interface Type {
  movieType: string;
  count: number;
}

const HindiMovieCount: React.FC<Type> = ({ movieType, count }) => {
  return (
    <div className="container-box">
      <h2>{movieType}</h2>
      <p>Total: {count}</p>
    </div>
  );
};

interface Type {
  movieType: string;
}

export default HindiMovieCount;
