import styled from "styled-components";
import { colors } from "../../config/theme";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 300px;
  margin-right: 100px;
`;

export const StyledInput = styled.input`
  height: 34px;
  background-color: ${colors.bgdarker};
  border: 0.5px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  :focus {
    border: 0.5px solid ${colors.dark};
    outline: none;
  }
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: normal;
`;

export const Label = styled.label`
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 10px;
`;
