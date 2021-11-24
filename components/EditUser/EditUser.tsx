import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Input, Button } from "..";
import { StyledForm } from "./EditUser.style";
import { useMutation } from "@apollo/client";
import { UPDATE_MUTATION } from "../../app/mutations";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/userSlice";

const EditUser = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);
  const [updateUserOne, { data, loading, error }] =
    useMutation(UPDATE_MUTATION);

  const [userID, setID] = useState(user.id.toString() || "");
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [bday, setBday] = useState(user.birthday);

  useEffect(() => {
    if (data || error) {
      router.push("/dashboard");
    }
  });

  const checkValues = () => {
    if (userID.length === 0) {
      return false;
    } else if (name.length === 0) {
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

  const updateUser = () => {
    updateUserOne({
      variables: {
        pkColumns: {
          id: user.id,
        },
        set: {
          date_of_birth: bday,
          email,
          id: userID,
          lastname,
          name,
          phone,
        },
      },
    });
  };

  return (
    <Box heading="Edit User">
      <StyledForm>
        <Input
          id="id"
          label="ID:"
          value={userID}
          onChange={(e) => {
            handleChange(e, setID);
          }}
        />
        <Input
          id="name"
          label="Name:"
          value={name}
          onChange={(e) => {
            handleChange(e, setName);
          }}
        />
      </StyledForm>
      <StyledForm>
        <Input
          id="lastname"
          label="Lastname:"
          value={lastname}
          onChange={(e) => {
            handleChange(e, setLastname);
          }}
        />
        <Input
          id="email"
          label="Email:"
          type="email"
          value={email}
          onChange={(e) => {
            handleChange(e, setEmail);
          }}
        />
      </StyledForm>
      <StyledForm>
        <Input
          id="phone"
          label="Phone:"
          value={phone}
          onChange={(e) => {
            handleChange(e, setPhone);
          }}
        />
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
        onClick={updateUser}
        disabled={loading || data || !checkValues()}
      >
        Update
      </Button>
    </Box>
  );
};

export default EditUser;
