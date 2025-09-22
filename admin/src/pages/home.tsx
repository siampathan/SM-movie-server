import BanglaMovieCount from "./banglaMovieCount";
import EnglishMovieCount from "./englishMovieCount";
import HindiMovieCount from "./hindiMovieCount";
import OthersMovieCount from "./othersMovieCount";

import {
  StyledHomeWrap,
  StyledContainer,
  StyledContainerBox,
} from "../assets/style/style";

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
    <StyledHomeWrap>
      <StyledContainer>
        <StyledContainerBox>
          <EnglishMovieCount movieType="English" count={EnglishCount} />
        </StyledContainerBox>
        <StyledContainerBox>
          <BanglaMovieCount movieType="Bangla" count={BanglaCount} />
        </StyledContainerBox>
        <StyledContainerBox>
          <HindiMovieCount movieType="Hindi" count={HindiCount} />
        </StyledContainerBox>
        <StyledContainerBox>
          <OthersMovieCount movieType="Others" count={OthersCount} />
        </StyledContainerBox>
      </StyledContainer>
    </StyledHomeWrap>
  );
};

export default Home;
