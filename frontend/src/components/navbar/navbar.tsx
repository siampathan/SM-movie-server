import Logo from '../../assets/logo.png'
import { StyledNavLink } from '../../assets/style/style'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar-wrap">
    <StyledNavLink to="/" className="navbar-left">
        <img src={Logo} alt="" />
    </StyledNavLink>
    <div className="navbar-right">
        <StyledNavLink to="/english-movies" >English</StyledNavLink>
        <StyledNavLink to="/bangla-movies">Bangla</StyledNavLink>
        <StyledNavLink to="/hindi-movies">Hindi</StyledNavLink>
        <StyledNavLink to="/other-movies">Others</StyledNavLink>
    </div>
    </div>
    </>
  )
}

export default Navbar