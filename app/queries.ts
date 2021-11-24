import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
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
