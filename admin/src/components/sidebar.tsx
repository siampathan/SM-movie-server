import {
  StyledNavLink,
  SidebarWrap,
  SidebarList,
  SidebarItem,
} from "../assets/style/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <SidebarWrap>
      <SidebarList>
        <StyledNavLink to="/english-movies">
          <SidebarItem>
            <FontAwesomeIcon icon={faFilm} />
            ENGLISH Movies
          </SidebarItem>
        </StyledNavLink>

        <StyledNavLink to="/bangla-movies">
          <SidebarItem>
            <FontAwesomeIcon icon={faFilm} />
            BNGLA Movies
          </SidebarItem>
        </StyledNavLink>
        <StyledNavLink to="/hindi-movies">
          <SidebarItem>
            <FontAwesomeIcon icon={faFilm} />
            HINDI Movies
          </SidebarItem>
        </StyledNavLink>
        <StyledNavLink to="/other-movies">
          <SidebarItem>
            <FontAwesomeIcon icon={faFilm} />
            OTHERS Movies
          </SidebarItem>
        </StyledNavLink>
      </SidebarList>
    </SidebarWrap>
  );
};

export default SideBar;
