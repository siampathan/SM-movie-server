import { StyledNavLink } from "../../assets/style/style"
import { useMovies } from "../../API/api"
import Arrow from '../../assets/arrow.png';
import PlayBtn from '../../assets/play.png';

import './homeList.css';
import axios from "axios";
import { useEffect } from "react";


interface Props {
  moviesType: string;
  pathRoute: string;
  url:string;
  

}

const url = "http://localhost:8000/api/movies/english-movies";

const HomeList: React.FC<Props> = ({moviesType, pathRoute}) => {
     const { movies, loading, error } = useMovies(moviesType);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error fetching movies: {error.message}</p>;

  console.log("This is Home Page !!");
  
  const testfetch = async () => {
    const response = axios.get(`${url}`);
    console.log(response);
  }

  useEffect(() => {
    testfetch();
  },[]);
  

  return (
    <>
       <StyledNavLink to={`/${moviesType}`}  className="movies-sec">
            <h2> {pathRoute}</h2>
          </StyledNavLink>
        <div className="card-list">
            {movies.map((movie: any) => (
              <div className="card-container" key={movie.id}>
                <div className="buttons">
                  <StyledNavLink
                    to={movie.movie_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="down-button"
                  >
                    <img src={Arrow} alt="" />
                  </StyledNavLink>

                  <StyledNavLink
                    to={`/${moviesType}/${pathRoute}/${movie.id}`}
                    className="play-button"
                  >
                    <img src={PlayBtn} alt="" />
                  </StyledNavLink>
                </div>

                <StyledNavLink to={`/${moviesType}/${pathRoute}/${movie.id}`}>
                  <img src={movie.poster_link} alt="background" />
                  <div className="content-sec">
                    <h2>{movie.title}</h2>
                    <div className="sub-content">
                      <p>{movie.genre}</p>
                      <span></span>
                      <p>{movie.rating}</p>
                    </div>
                  </div>
                </StyledNavLink>
              </div>
            ))}
          </div>
    </>
  )
}

export default HomeList