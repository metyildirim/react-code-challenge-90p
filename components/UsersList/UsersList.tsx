import { useRouter } from "next/router";
import { Box, UsersTable } from "..";

const UsersList = () => {
  const router = useRouter();

  const onClickCreate = () => {
    router.push("/dashboard/create-user");
  };

  return (
    <Box
      heading="Users List"
      buttonText="Create User"
      buttonAction={onClickCreate}
    >
      <UsersTable />
    </Box>
  );
};

export default UsersList;
