import { StyledContainer } from "./Container.style";

export type DashboardContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const Container = ({ children }: DashboardContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
