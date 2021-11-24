import styled from "styled-components";
import { colors } from "../../config/theme";

export type TableCellProps = {
  width: string;
  fontSize?: string;
};

export const StyledTable = styled.div`
  overflow-x: scroll;
`;

export const TableHeader = styled.div`
  min-width: 750px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.darkbg};
  height: 46px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.div`
  min-width: 750px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  padding: 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  background-color: white;

  & > div > button {
    visibility: hidden;
  }

  @media (max-width: 1124px) {
    & > div > button {
      visibility: visible;
    }
  }

  :hover {
    & > div > button {
      visibility: visible;
    }
  }

  :nth-child(even) {
    background-color: ${colors.bgdarker};
  }
`;

export const TableItem = styled.div<TableCellProps>`
  font-family: "Montserrat";
  font-size: ${(props) => props.fontSize || "10px"};
  font-weight: 400;
  width: ${(props) => props.width};
  white-space: nowrap;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RowCount = styled.span`
  margin-left: auto;
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 12px;
`;

export const CurrentRow = styled.span`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 12px;
  margin-left: 10px;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    background-color: ${colors.darkbg};
  }
  :active {
    background-color: white;
  }
  :disabled {
    background-color: ${colors.darkbg};
    cursor: default;
  }
`;

export const TableAction = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  color: ${colors.primary};
  font-weight: 500;
  font-size: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  :active {
    color: black;
  }
`;

export const ModalHeader = styled.span`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  width: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
