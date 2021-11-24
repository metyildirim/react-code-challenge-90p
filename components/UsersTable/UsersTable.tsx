import { useEffect } from "react";
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
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_MUTATION } from "../../app/mutations";
import { USERS_QUERY } from "../../app/queries";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../app/userSlice";

const arrayChunk = (arr: Array<never>, len: number) => {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
};

export type UserType = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  date_of_birth: string;
};

const Table = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userID, setUserID] = useState(0);
  const [page, setPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { data, refetch } = useQuery(USERS_QUERY);
  const [userChunks, setUserChunks] = useState([[]]);
  const chunkSize = 20;

  useEffect(() => {
    refetch()?.then(() => {
      if (data) {
        setUserChunks(arrayChunk(data.users, chunkSize));
      }
    });
  }, [data, refetch]);

  const [deleteUser] = useMutation(DELETE_MUTATION);

  const PaginationSection = () => (
    <PaginationContainer>
      <RowCount>{data?.users.length} Total Users</RowCount>
      <PaginationButton
        disabled={page === 0}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        <Image src="/chevron-left.svg" height="24px" width="16px" alt="back" />
      </PaginationButton>
      <CurrentRow>
        {page + 1} / {Math.floor((data?.users?.length - 1) / chunkSize) + 1}
      </CurrentRow>
      <PaginationButton
        disabled={page === Math.floor((data?.users?.length - 1) / chunkSize)}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        <Image src="/chevron-right.svg" height="24px" width="16px" alt="back" />
      </PaginationButton>
    </PaginationContainer>
  );

  const HeaderSection = () => (
    <TableHeader>
      <TableItem width="100px" fontSize="12px">
        ID
      </TableItem>
      <TableItem width="150px" fontSize="12px">
        Full Name
      </TableItem>
      <TableItem width="150px" fontSize="12px">
        Email
      </TableItem>
      <TableItem width="100px" fontSize="12px">
        Phone
      </TableItem>
      <TableItem width="100px" fontSize="12px">
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
              setPage(0);
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
        {userChunks[page].map(
          ({ id, name, lastname, email, phone, date_of_birth }: UserType) => (
            <TableRow key={id}>
              <TableItem width="100px">{id}</TableItem>
              <TableItem width="150px">{`${name} ${lastname}`}</TableItem>
              <TableItem width="150px">{email}</TableItem>
              <TableItem width="100px">{phone}</TableItem>
              <TableItem width="100px">{date_of_birth}</TableItem>
              <TableItem width="50px">
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
