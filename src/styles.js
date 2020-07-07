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
      color: ${(props) => props.theme.some};
    }
  }
`;
const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  text-align: center;
`;
const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.some};
`;

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  img {
    width: 40%;
    float: center;
  }

  p {
    float: right;
  }
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

const Search = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export {
  CoffeeImage,
  CoffeeWraper,
  Description,
  DeleteButtonStyled,
  DetailWrapper,
  GlobalStyle,
  ListWrapper,
  ThemeButton,
  Title,
  Search,
};
