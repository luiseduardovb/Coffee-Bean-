import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { MdAddCircleOutline } from "react-icons/md";

export const CoffeeImage = styled.img`
  padding: 3%;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const CoffeeWraper = styled.div`
  margin: 20px;

  img {
    width: 300px;
    height: 300px;
    background-color: ${(props) => props.theme.backgroundColor};
  }

  p {
    text-align: center;
    font-weight: bolder;

    &.coffee-price {
      color: ${(props) => props.theme.some};
      font-weight: bold;
    }
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  text-align: center;
`;
export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.some};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  h1 {
    text-align: right;
  }
  img {
    width: 40%;
    float: center;
  }

  p {
    float: center;
  }
`;
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor} ;
    background-color:  ${(props) => props.theme.backgroundColor}
  }


`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
    height: 8rem;
  }
`;

export const AddButtonStyled = styled(MdAddCircleOutline)`
  font-size: 2em;
`;

export const NavItem = styled(NavLink)`
  padding: 0.25 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.some};
    background-color: fuchsia;
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  text-align: center;
`;
