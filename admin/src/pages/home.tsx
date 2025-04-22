import BanglaMovieCount from "./banglaMovieCount";
import EnglishMovieCount from "./englishMovieCount";
import HindiMovieCount from "./hindiMovieCount";
import OthersMovieCount from "./othersMovieCount";

import { getEnglishMovieCount } from "../API/api";

interface HomeProps {
  token: string;
  length: number;
}

const Home: React.FC<HomeProps> = ({ token }) => {
  console.log(token);

  const EnglishCount = getEnglishMovieCount("english");
  const BanglaCount = getEnglishMovieCount("bangla");
  const HindiCount = getEnglishMovieCount("hindi");
  const OthersCount = getEnglishMovieCount("other");
  console.log("Movie Count - ", EnglishCount);

  return (
    <div className="home-wrap">
      <div className="container">
        <EnglishMovieCount movieType="English" count={EnglishCount} />
        <BanglaMovieCount movieType="Bangla" count={BanglaCount} />
        <HindiMovieCount movieType="Hindi" count={HindiCount} />
        <OthersMovieCount movieType="Others" count={OthersCount} />
      </div>
    </div>
  );
};

export default Home;
