import { backendUrl } from "../App"
import Movies from "../components/movies/movies"


const HindiMovies = () => {
  return (
    <Movies
      backendUrl={backendUrl}
      movieType="hindi"
      addMoviePath="hindi-movies"
      pageTitle="Hindi Movies"
    />
  )
}

export default HindiMovies