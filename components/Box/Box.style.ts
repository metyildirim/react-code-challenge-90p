import styled from "styled-components";
import { colors } from "../../config/theme";

export type BoxProps = {
  width?: string;
};

export const StyledBox = styled.div<BoxProps>`
  width: ${(props) => props.width || "100%"};
  padding: 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
  overflow-x: hidden;
  margin-bottom: 20px;
  @media (max-width: 540px) {
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;

export const Heading = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 18px;
  color: ${colors.secondary};
`;
