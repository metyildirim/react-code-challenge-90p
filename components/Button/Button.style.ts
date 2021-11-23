import styled from "styled-components";
import { colors } from "../../config/theme";

export type StyledButtonProps = {
  children: string | JSX.Element[];
  onClick: () => void;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  height?: string;
  fontSize?: string;
  bgcolor?: string;
  disabled?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  height: ${(props) => props.height || "47px"};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.bgcolor || colors.primary};
  font-family: "Montserrat";
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondary};
  }
  :active {
    background-color: ${colors.dark};
  }
  :disabled {
    background-color: ${colors.darkbg};
    cursor: not-allowed;
  }
`;
