import styled from "styled-components";
import { colors } from "../../config/theme";

export type ImageProps = {
  src: string;
  marginLeft?: string;
  rotation?: boolean;
};

export type NavContainerProps = {
  visible: boolean;
};

export const StyledNavbar = styled.div`
  width: 273px;
  height: 100vh;
  position: fixed;
  background-color: ${colors.dark};
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    position: relative;
    height: auto;
    width: 100vw;
  }
`;

export const Logo = styled.img<ImageProps>`
  height: 55px;
  width: 55px;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    height: 35px;
    width: 35px;
    margin-bottom: 30px;
  }
`;

export const HamburgerButton = styled.img<ImageProps>`
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: none;
  :active {
    background-color: white;
  }

  @media (max-width: 1024px) {
    display: block;
  }
  position: absolute;
  top: 25px;
  left: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const Navlink = styled.div`
  width: 100%;
  height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
    background-color: ${colors.bg};
  }
`;

export const Icon = styled.img<ImageProps>`
  height: 25px;
  width: 25px;
  margin-left: ${(props) => props.marginLeft};
  transform: ${(props) => (props.rotation ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 0.25s;
`;

export const Text = styled.span`
  font-family: "Montserrat";
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const NavitemContainer = styled.div<NavContainerProps>`
  max-height: ${(props) => (props.visible ? "0px" : "120px")};
  width: 100%;
  overflow: hidden;
  transition: all 0.25s;
`;

export const NavContent = styled.div<NavContainerProps>`
  width: 100%;
  overflow: hidden;
  transition: all 0.25s;
  @media (max-width: 1024px) {
    max-height: ${(props) => (props.visible ? "0px" : "200px")};
  }
`;

export const Navitem = styled.span`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 500;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  :active {
    color: white;
  }
`;
