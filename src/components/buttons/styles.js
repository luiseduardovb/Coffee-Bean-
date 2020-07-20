import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";

export const AddButtonStyled = styled(MdAddCircleOutline)`
  font-size: 2em;
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  text-align: center;
`;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
