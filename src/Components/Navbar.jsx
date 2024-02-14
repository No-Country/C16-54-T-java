import "./navbar.css";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Image } from '@chakra-ui/react'
import logo from "../assets/img/logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <Box paddingLeft="20px"><Image marginLeft={"2rem"} h={"40px"} src={logo} alt="logo"/></Box>
      <div className="menu">
        <Stack direction="row" spacing={20} align="center">
          <Button color={"#9BFFF3"} variant="link">
            Home
          </Button>
          <Button color={"#9BFFF3"} variant="link">
            Tienda
          </Button>
          <Button color={"#9BFFF3"} variant="link">
            Biblioteca
          </Button>
          <Button color={"#9BFFF3"} variant="link">
            Acerca de
          </Button>
        </Stack>
      </div>
      <div className="input">
        <InputGroup size="md">
          <Input pr="9rem" placeholder="Buscador..." bg={"white"} />
          <InputRightElement width="4.5rem">
            <IconButton aria-label="Search database" icon={<SearchIcon />} bg={"none"}/>
          </InputRightElement>
        </InputGroup>
      </div>
      <Box margin={"2rem"}>
        <Button bg={"black"} >
          <MdOutlineLocalGroceryStore color={"#9BFFF3"} />
        </Button>
        <Button bg={"black"}>
          <IoPersonSharp color={"#9BFFF3"} />
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
