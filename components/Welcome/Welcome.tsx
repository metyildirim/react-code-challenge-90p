import Button from "../Button";
import Image from "next/image";
import { StyledWelcome } from "./Welcome.style";
import { useRouter } from "next/router";

const Welcome = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/dashboard");
  };

  return (
    <StyledWelcome>
      <Image src="/logo.svg" height="70px" width="70px" alt="logo" />
      <Button marginTop="47px" onClick={onClick}>
        Continue to Dashboard
      </Button>
    </StyledWelcome>
  );
};

export default Welcome;
