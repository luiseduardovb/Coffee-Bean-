import styled from "styled-components";

export const CoffeeImage = styled.img`
  padding: 3%;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const Description = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.some};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;
