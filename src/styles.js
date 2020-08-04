import styled, { createGlobalStyle } from "styled-components";
import { RiLoader2Line } from "react-icons/ri";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor} ;
    background-color:  ${(props) => props.theme.some}
  }`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const LoadingStyled = styled(RiLoader2Line)`
  color: #ffffff;
  font-size: 8em;
`;
