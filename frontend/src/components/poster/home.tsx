import BanglaMoviesHome from "../../pages/banglaMoviesHome";
import EnglishMoviesHome from "../../pages/englishMoviesHome";
import HindiMoviesHome from "../../pages/hindiMoviesHome";
import OthersMoviesHome from "../../pages/othersMoviesHome";
import Poster from "../../pages/poster/poster";



const Home = () => {



  return (
    <>
      <Poster />
      <EnglishMoviesHome />
      <BanglaMoviesHome />
      <HindiMoviesHome />
      <OthersMoviesHome />
    </>
  );
};

export default Home;
