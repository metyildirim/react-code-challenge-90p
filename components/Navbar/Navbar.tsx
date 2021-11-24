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
  HamburgerButton,
  NavContent,
} from "./Navbar.style";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [navHidden, setNavHidden] = useState(true);

  const toggleHidden = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  const toggleNav = () => {
    if (navHidden) {
      setNavHidden(false);
    } else {
      setNavHidden(true);
    }
  };

  return (
    <StyledNavbar>
      <Link href="/dashboard">
        <a>
          <Logo src="/logo.svg" />
        </a>
      </Link>
      <HamburgerButton src="/hamburger_menu.svg" onClick={toggleNav} />
      <NavContent visible={navHidden}>
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
      </NavContent>
    </StyledNavbar>
  );
};

export default Navbar;
