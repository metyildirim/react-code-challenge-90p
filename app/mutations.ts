import { gql } from "@apollo/client";

export const CREATE_MUTATION = gql`
  mutation Mutation_root($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_MUTATION = gql`
  mutation Mutation_root(
    $pkColumns: users_pk_columns_input!
    $set: users_set_input
  ) {
    update_users_by_pk(pk_columns: $pkColumns, _set: $set) {
      id
    }
  }
`;

export const DELETE_MUTATION = gql`
  mutation Delete_users_by_pk($deleteUsersByPkId: Int!) {
    delete_users_by_pk(id: $deleteUsersByPkId) {
      id
    }
  }
`;
