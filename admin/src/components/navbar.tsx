import { NavbarWrap, StyledNavLink, LogoutButton } from "../assets/style/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import  LOGO from '../assets/logo.png'

interface LoginProps {
  setToken: (token: string) => void;
}

const Navbar: React.FC<LoginProps> = ({ setToken }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  return (
    <NavbarWrap>
      <StyledNavLink to="/">
        <div className="logo">
          <img src={LOGO} alt="" />
        </div>
      </StyledNavLink>

      <LogoutButton onClick={handleLogout} className="logout">
        <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
      </LogoutButton>
    </NavbarWrap>
  );
};

export default Navbar;
