import styled, { createGlobalStyle } from "styled-components";

const CoffeeImage = styled.img`
  padding: 3%;
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const CoffeeWraper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.coffee-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.blue};
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor} ;
    background-color:  ${(props) => props.theme.backgroundColor}
  }


`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const ThemeButton = styled.button`
  font-size: 1em;
   display: inline-block;
   padding: 0.8em 2em;
   margin: 0 0.8em 0.8em 0;
   border-radius: 2em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 900;
   text-align: center;
   transition: all 0.2s;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export {
  Title,
  Description,
  CoffeeImage,
  ListWrapper,
  CoffeeWraper,
  GlobalStyle,
  ThemeButton,
};
