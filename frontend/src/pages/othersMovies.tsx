import Movies from '../components/movies/movies'
import { backendUrl } from '../App'

const OthersMovies = () => {
  return (
   <Movies
      backendUrl={backendUrl}
      movieType="other"
      addMoviePath="other-movies"
      pageTitle="Other Movies"
    />
  )
}

export default OthersMovies