import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LoginWrap = styled.div`
  max-width: 350px;
  padding: 20px;
  background-color: #fff;
  border-radius: ${(props) => props.theme.primaryRadius};
  margin: 0 auto;
  margin-top: 20vh;
  -webkit-box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);
  -moz-box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);
  box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);

  h1 {
    font-size: 1.5rem;
    padding: 5px 0;
  }
`;

export const Field = styled.div`
  padding: 10px 0;

  p {
    color: #374151;
    font-weight: 500;
    padding-bottom: 10px;
  }

  input {
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    font-size: ${(props) => props.theme.primaryFont || "16px"};
    border-radius: 10px;
    border: 1px solid #d1d5db;
    outline: none;
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 7vh;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border-radius: ${(props) => props.theme.primaryRadius || "10px"};
  font-size: ${(props) => props.theme.primaryFont || "16px"};
`;

export const NavbarWrap = styled.div`
  position: sticky;
  top: 0;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 999;
  -webkit-box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);
  -moz-box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);
  box-shadow: 1px 5px 23px -1px rgba(163, 158, 163, 0.63);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const LogoutButton = styled.button`
  max-width: 250px;
  background-color: rgb(173, 165, 165);
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
`;
