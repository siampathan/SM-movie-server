import { StyledNavLink } from "../assets/style/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sidebar-wrap">
      <ul>
        <StyledNavLink to="/english-movies">
          <li>
            <FontAwesomeIcon icon={faFilm} />
            ENGLISH Movies
          </li>
        </StyledNavLink>

        <StyledNavLink to="/bangla-movies">
          <li>
            <FontAwesomeIcon icon={faFilm} />
            BNGLA Movies
          </li>
        </StyledNavLink>
        <StyledNavLink to="/hindi-movies">
          <li>
            <FontAwesomeIcon icon={faFilm} />
            HINDI Movies
          </li>
        </StyledNavLink>
        <StyledNavLink to="/others-movies">
          <li>
            <FontAwesomeIcon icon={faFilm} />
            OTHERS Movies
          </li>
        </StyledNavLink>
      </ul>
    </div>
  );
};

export default SideBar;
