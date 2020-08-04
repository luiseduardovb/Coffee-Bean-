import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiArrowBack } from "react-icons/ti";

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
