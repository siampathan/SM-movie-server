import BG1 from "../../assets/bg-1.jpg";
import BG2 from "../../assets/bg-2.jpg";
import BG3 from "../../assets/bg-3.jpg";
import "./poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <div className="ccl">
        <div className="content">
          <h2>Biggest Movie Server !!</h2>
          <p>What you want to show? Here have all of things...</p>
        </div>
      </div>
      <div className="bg">
        <img src={BG1} alt="" />
      </div>
      <div className="bg">
        <img src={BG2} alt="" />
      </div>
      <div className="bg">
        <img src={BG3} alt="" />
      </div>
    </div>
  );
};

export default Poster;
