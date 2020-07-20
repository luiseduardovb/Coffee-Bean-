import styled from "styled-components";

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

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
