import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Box, UsersTable } from "..";

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      lastname
      email
      date_of_birth
      phone
    }
  }
`;

const UsersList = () => {
  const router = useRouter();
  const { data, loading, error, refetch } = useQuery(USERS_QUERY);

  useEffect(() => {
    refetch();
  });

  const onClickCreate = () => {
    router.push("/dashboard/create-user");
  };

  return (
    <Box
      heading="Users List"
      buttonText="Create User"
      buttonAction={onClickCreate}
    >
      <UsersTable userdata={data?.users || []} refetch={refetch} />
    </Box>
  );
};

export default UsersList;
