import { useState } from "react";
import Link from "next/link";
import {
  StyledNavbar,
  Logo,
  Navlink,
  Icon,
  Text,
  NavitemContainer,
  Navitem,
} from "./Navbar.style";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <StyledNavbar>
      <Link href="/dashboard">
        <a>
          <Logo src="/logo.svg" />
        </a>
      </Link>
      <Navlink onClick={toggleHidden}>
        <Icon src="/users.svg" />
        <Text>USERS</Text>
        <Icon src="/chevron-up.svg" marginLeft="auto" rotation={hidden} />
      </Navlink>
      <NavitemContainer visible={hidden}>
        <Link href="/dashboard">
          <a>
            <Navitem>Users List</Navitem>
          </a>
        </Link>
        <Link href="/dashboard/create-user">
          <a>
            <Navitem>Create User</Navitem>
          </a>
        </Link>
      </NavitemContainer>
    </StyledNavbar>
  );
};

export default Navbar;
