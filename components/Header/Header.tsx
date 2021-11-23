import {
  StyledHeader,
  TitleContainer,
  Title,
  Subtitle,
  UserImage,
  ImageContainer,
  UserContainer,
  Username,
  Role,
  Hr,
} from "./Header.style";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <TitleContainer>
          <Subtitle>USERS</Subtitle>
          <Title>Dashboard</Title>
        </TitleContainer>
        <ImageContainer>
          <UserImage src="/user-white.svg" />
        </ImageContainer>
        <UserContainer>
          <Username>Superuser</Username>
          <Role>Admin</Role>
        </UserContainer>
      </StyledHeader>
      <Hr />
    </>
  );
};

export default Header;
