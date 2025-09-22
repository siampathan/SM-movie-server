import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

//pagination
export const PaginationContainer = styled.div`
  max-width: 300px;
  height: 8vh;
  display: flex;
  gap: 10px;
  justify-content: left;
  margin: 1.2rem 6.8rem;
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

export const PageIndicator = styled.div`
  padding: 20px 10px;
  background-color: #42406bff;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  width: 60px; /* or min-width if you want more flexibility */
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//filter section
export const FilterContainer = styled.div`
  max-width: 350px;
  margin: 5rem auto;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #fff;
  background-color: #42406bff;
  border-radius: 10px;
  padding: 0 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #42406bff;
  color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
`;


//Movie List 
export const MovieType = styled.div`
  max-width: 120px;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(218, 137, 108);
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  margin-left: 6rem;
  text-transform: capitalize;
`;

//style NavLink
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;


//singerpur airlines
//186473 (29h5min)


//
