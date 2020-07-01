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
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
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
