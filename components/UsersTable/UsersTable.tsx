import Image from "next/image";
import {
  PaginationContainer,
  RowCount,
  StyledTable,
  PaginationButton,
  CurrentRow,
  TableHeader,
  TableRow,
  TableItem,
  TableAction,
  ModalHeader,
  ButtonContainer,
} from "./UsersTable.style";
import { Modal } from "..";
import Box from "../Box";
import Button from "../Button";
import { colors } from "../../config/theme";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/hooks";
import { UserState, setUser } from "../../app/userSlice";

const DELETE_MUTATION = gql`
  mutation Delete_users_by_pk($deleteUsersByPkId: Int!) {
    delete_users_by_pk(id: $deleteUsersByPkId) {
      id
    }
  }
`;

export type TableProps = {
  userdata: Array<UserType>;
  refetch: () => void;
};

export type UserType = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  date_of_birth: string;
};

const Table = ({ userdata, refetch }: TableProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userID, setUserID] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_MUTATION);

  const PaginationSection = () => (
    <PaginationContainer>
      <RowCount>{userdata.length} rows</RowCount>
      <PaginationButton>
        <Image src="/chevron-left.svg" height="24px" width="16px" alt="back" />
      </PaginationButton>
      <CurrentRow>1 / 1</CurrentRow>
      <PaginationButton>
        <Image src="/chevron-right.svg" height="24px" width="16px" alt="back" />
      </PaginationButton>
    </PaginationContainer>
  );

  const HeaderSection = () => (
    <TableHeader>
      <TableItem width="100px" fontSize="12px">
        ID
      </TableItem>
      <TableItem width="200px" fontSize="12px">
        Full Name
      </TableItem>
      <TableItem width="200px" fontSize="12px">
        Email
      </TableItem>
      <TableItem width="150px" fontSize="12px">
        Phone
      </TableItem>
      <TableItem width="200px" fontSize="12px">
        Date of Birth
      </TableItem>
    </TableHeader>
  );

  const DeleteModal = () => (
    <Modal>
      <Box heading="Delete User" width="300px">
        <ModalHeader>Are you sure?</ModalHeader>
        <ButtonContainer>
          <Button
            onClick={() => {
              deleteUser({ variables: { deleteUsersByPkId: userID } });
              setModalVisible(false);
              setTimeout(refetch, 1000);
            }}
            height="40px"
            fontSize="14px"
            bgcolor={colors.red}
          >
            <Image src="/delete.svg" height="14px" width="14px" alt="trash" />
            <span style={{ marginLeft: "10px" }}>Delete</span>
          </Button>
          <Button
            onClick={() => {
              setModalVisible(false);
            }}
            height="40px"
            fontSize="14px"
          >
            Cancel
          </Button>
        </ButtonContainer>
      </Box>
    </Modal>
  );

  return (
    <>
      <StyledTable>
        {modalVisible ? DeleteModal() : null}
        {PaginationSection()}
        {HeaderSection()}
        {userdata.map(
          ({ id, name, lastname, email, phone, date_of_birth }: UserType) => (
            <TableRow key={id}>
              <TableItem width="100px">{id}</TableItem>
              <TableItem width="200px">{`${name} ${lastname}`}</TableItem>
              <TableItem width="200px">{email}</TableItem>
              <TableItem width="150px">{phone}</TableItem>
              <TableItem width="200px">{date_of_birth}</TableItem>
              <TableItem width="100px">
                <TableAction
                  onClick={() => {
                    dispatch(
                      setUser({
                        id,
                        name,
                        lastname,
                        email,
                        phone,
                        birthday: date_of_birth,
                      })
                    );
                    router.push("/dashboard/edit-user");
                  }}
                >
                  Edit
                </TableAction>
                <TableAction
                  onClick={() => {
                    setUserID(id);
                    setModalVisible(true);
                  }}
                >
                  Delete
                </TableAction>
              </TableItem>
            </TableRow>
          )
        )}
        {HeaderSection()}
        {PaginationSection()}
      </StyledTable>
    </>
  );
};

export default Table;
