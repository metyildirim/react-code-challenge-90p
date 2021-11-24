import styled from "styled-components";

export const StyledBody = styled.div`
  width: calc(100vw - 272px);
  padding: 28px;
  padding-bottom: 0px;
  margin-left: 272px;
  @media (max-width: 1024px) {
    width: 100vw;
    margin-left: 0px;
  }
  @media (max-width: 540px) {
    padding: 10px;
  }
`;
