import { StyledButton, StyledButtonProps } from "./Button.style";

const Button = ({ children, ...props }: StyledButtonProps): JSX.Element => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
