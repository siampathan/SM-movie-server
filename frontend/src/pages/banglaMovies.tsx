import { backendUrl } from "../App"
import Movies from "../components/movies/movies"


const BanglaMovies = () => {
  return (
    <Movies
      backendUrl={backendUrl}
      movieType="bangla"
      addMoviePath="bangla-movies"
      pageTitle="Bangla Movies"
    />
  )
}

export default BanglaMovies