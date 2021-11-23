import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Input, Button } from "..";
import { StyledForm } from "./CreateUser.styles";

const CREATE_MUTATION = gql`
  mutation Mutation_root($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
    }
  }
`;

const CreateUser = () => {
  const router = useRouter();
  const [createUsersOne, { data, loading, error }] =
    useMutation(CREATE_MUTATION);

  useEffect(() => {
    if (data) {
      router.push("/dashboard");
    }
  });

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bday, setBday] = useState("2021-11-17");

  const checkValues = () => {
    if (name.length === 0) {
      return false;
    } else if (lastname.length === 0) {
      return false;
    } else if (email.length === 0) {
      return false;
    } else if (phone.length === 0) {
      return false;
    } else if (bday.length === 0) {
      return false;
    }
    return true;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (value: any) => void
  ) => {
    setter(event.target.value);
  };

  const createUser = () => {
    createUsersOne({
      variables: {
        object: {
          email,
          name,
          lastname,
          phone,
          date_of_birth: bday.toString(),
        },
      },
    });
  };

  return (
    <Box heading="Create User">
      <StyledForm>
        <Input
          id="name"
          label="Name:"
          value={name}
          onChange={(e) => {
            handleChange(e, setName);
          }}
        />
        <Input
          id="lastname"
          label="Lastname:"
          value={lastname}
          onChange={(e) => {
            handleChange(e, setLastname);
          }}
        />
      </StyledForm>
      <StyledForm>
        <Input
          id="email"
          label="Email:"
          type="email"
          value={email}
          onChange={(e) => {
            handleChange(e, setEmail);
          }}
        />
        <Input
          id="phone"
          label="Phone:"
          value={phone}
          onChange={(e) => {
            handleChange(e, setPhone);
          }}
        />
      </StyledForm>
      <StyledForm>
        <Input
          id="bday"
          label="Birthday:"
          type="date"
          value={bday}
          onChange={(e) => {
            handleChange(e, setBday);
          }}
        />
      </StyledForm>
      <Button
        fontSize="14px"
        height="40px"
        marginTop="10px"
        onClick={createUser}
        disabled={loading || data || !checkValues()}
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateUser;
