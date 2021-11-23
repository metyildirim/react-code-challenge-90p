import styled from "styled-components";
import { colors } from "../../config/theme";

export type UserImageProps = {
  src: string;
};

export const StyledHeader = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

export const Title = styled.span`
  font-family: "Montserrat";
  font-weight: 700;
  color: ${colors.dark};
  font-size: 24px;
`;

export const Subtitle = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  color: ${colors.secondary};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${colors.primary};
  margin-left: auto;
  margin-right: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img<UserImageProps>`
  height: 38px;
  width: 28px;
`;

export const Username = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  color: ${colors.secondary};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Role = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  color: ${colors.secondary};
  font-size: 10px;
`;

export const Hr = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
`;
