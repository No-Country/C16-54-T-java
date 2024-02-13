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

const Navbar = () => {
  return (
    <div className="navbar">
      <Box w={"4rem"} h={"4rem"} bg={"white"} m={"2rem"}></Box>
      <div className="menu">
        <Stack direction="row" spacing={20} align="center">
          <Button variant="link">
            Home
          </Button>
          <Button variant="link">
            Tienda
          </Button>
          <Button variant="link">
            Biblioteca
          </Button>
          <Button variant="link">
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
        <Button bg={"black"}>
          <MdOutlineLocalGroceryStore color={"white"} />
        </Button>
        <Button bg={"black"}>
          <IoPersonSharp color={"white"} />
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
