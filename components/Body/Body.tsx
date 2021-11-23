import { StyledBody } from "./Body.style";
import { Header, UsersList, CreateUser, EditUser } from "..";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

const RenderBodySection = (query: ParsedUrlQuery) => {
  if (!query.path) {
    return <UsersList />;
  }
  switch (query.path[0]) {
    case "create-user":
      return <CreateUser />;
    case "edit-user":
      return <EditUser />;
  }
};

const Body = () => {
  const router = useRouter();

  return (
    <StyledBody>
      <Header />
      {RenderBodySection(router.query)}
    </StyledBody>
  );
};

export default Body;
