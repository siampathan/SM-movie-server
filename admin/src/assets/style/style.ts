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

export const FilterContainer = styled.div`
  max-width: 350px;
  height: 5vh;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding-right: 10px;
  border: 1px solid #ada5a5;
`;

//filter option
export const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 10px;
  font-size: 14px;

  &:focus-visible {
    border: none;
  }
`;

//Home section
export const StyledHomeWrap = styled.div`
  max-width: 60rem;
  height: 50vh;
  margin: 20px 60px;
  padding: 20px 40px;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
`;

export const StyledContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: 30vh;
  padding: 60px;
  background-color: rgb(160, 159, 154);
  color: #fff;
  border-radius: 8px;
`;

//side bar section
export const SidebarWrap = styled.div`
  border-right: 1px solid black;
  height: 100vh;
`;

export const SidebarList = styled.ul`
  padding: 20px;
  list-style: none;
`;

export const SidebarItem = styled.li`
  padding: 10px;
  font-size: 18px;
  border-bottom: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    font-size: 20px;
    transition: 0.5s ease-in-out;
  }
`;

//pagination
export const PaginationContainer = styled.div`
  max-width: 300px;
  height: 8vh;
  display: flex;
  gap: 10px;
  justify-content: left;
`;

export const PaginationButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: rgb(160, 158, 158);
  padding: 15px;
  font-size: 17px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageIndicator = styled.span`
  padding-top: 15px;
`;

//add movie
export const AddWrap = styled.div`
  margin: 10px 20px;
  max-width: 300px;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
`;

export const FormTitle = styled.p`
  font-size: 25px;
  padding-bottom: 10px;
`;

export const StyledInput = styled.input`
  max-width: 300px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid grey;
  outline: none;
  padding-left: 10px;
  font-size: 15px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

export const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
`;
