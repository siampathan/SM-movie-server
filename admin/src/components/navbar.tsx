import { NavbarWrap, StyledNavLink, LogoutButton } from "../assets/style/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
        <h2>M-SERVER</h2>
      </StyledNavLink>

      <LogoutButton onClick={handleLogout} className="logout">
        <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
      </LogoutButton>
    </NavbarWrap>
  );
};

export default Navbar;
