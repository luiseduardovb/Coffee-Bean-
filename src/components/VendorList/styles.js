import styled from "styled-components";

export const VendorItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const VendorsInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const CustomCol = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 20%;
  max-width: 20%;
  margin-bottom: 30px;
`;

export const VendorBox = styled.div`
  background-color: white;
  padding: 25px 20px 25px 20px;
  background-position: 12px center;
  background-size: auto 90px;
  text-align: center;
  border-radius: 8px;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  min-height: 250px;
  width: 100%;
  padding-left: 260px;
  transition: all 0.5s;
  transform: translateZ(0);
  display: block;
`;

export const PageContent = styled.div`
  padding: 20px;
`;

export const PageTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 20px;
  color: white;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
`;
export const StyledP = styled.p`
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-weight: 500;
  line-height: 1.2;
`;
