import { StyledBox, HeaderContainer, Heading } from "./Box.style";
import { Button } from "..";

export type BoxProps = {
  children: JSX.Element | JSX.Element[];
  heading: string;
  buttonText?: string;
  buttonAction?: () => void;
  width?: string;
};

const Box = ({
  children,
  heading,
  buttonText,
  buttonAction,
  width,
}: BoxProps) => {
  return (
    <StyledBox width={width}>
      <HeaderContainer>
        <Heading>{heading}</Heading>
        {buttonAction && buttonText ? (
          <Button
            marginLeft="auto"
            height="40px"
            fontSize="14px"
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        ) : null}
      </HeaderContainer>
      {children}
    </StyledBox>
  );
};

export default Box;
