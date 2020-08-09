import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.some};
`;

export const AddButtonStyled = styled(MdAddCircleOutline)`
  font-size: 2em;
`;

export const BackButtonStyled = styled(TiArrowBack)`
  font-size: 2em;
`;

export const DeleteButtonStyled = styled(RiDeleteBin6Line)`
  color: ${(props) => props.theme.red};
  text-align: center;
  font-size: 2em;
`;

export const UpdateButtonStyled = styled(GoPencil)`
  color: ${(props) => props.theme.mainColor};
  font-size: 2em;
`;
