import "./navbar.css";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Image } from "@chakra-ui/react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Flex className="navbar">
      <Box paddingLeft="20px">
        <Image
          marginLeft={"2rem"}
          marginRight={"2rem"}
          h={"40px"}
          src={logo}
          alt="logo"
        />
      </Box>
      <Flex
        className="menu"
        bg={"transparent"}
        display={["none", "none", "flex", "flex"]}
      >
        <Stack
          direction="row"
          spacing={{ base: 10, md: 5, lg: 20 }}
          align="center"
          paddingLeft={"1rem"}
        >
          <Link to={"/"}>
            <Button color={"#9BFFF3"} variant="link">
              Home
            </Button>
          </Link>

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
      </Flex>





      <Flex className="input" display={["none", "none", "flex", "flex"]}>
        <InputGroup w={[100, 250, 400]}>
          <Input pr="9rem" placeholder="Buscador..." bg={"white"} />
          <InputRightElement width="4.5rem">
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              bg={"none"}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>


      <Box margin={"2rem"}>
        <Button bg={"black"} padding={"6px"} height={"none"}>
          <MdOutlineLocalGroceryStore color={"#9BFFF3"} />
        </Button>
        <Link to={"/login"}>
          <Button bg={"black"} padding={"6px"} height={"none"} marginLeft={"1rem"}>
            <IoPersonSharp color={"#9BFFF3"} />
          </Button>
        </Link>
      </Box>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={() => changeDisplay("flex")}
      />

      <Flex
        className="nav-div"
        w="100vw"
        h="100vh"
        bgColor="gray.50"
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex
          className="nav-resp"
          direction="column"
          position="absolute"
          alignItems="center"
        >
          <Link to={"/"}>
            <Button color={"#9BFFF3"} variant="link">
              Home
            </Button>
          </Link>

          <Button color={"#9BFFF3"} variant="link">
            Tienda
          </Button>
          <Button color={"#9BFFF3"} variant="link">
            Biblioteca
          </Button>
          <Button color={"#9BFFF3"} variant="link">
            Acerca de
          </Button>

          <div
            className="input"
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisplay("flex")}
            
          >
            <InputGroup w={[100, 250, 400]}>
              <Input pr="9rem" placeholder="Buscador..." bg={"white"} />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  bg={"none"}
                />
              </InputRightElement>
            </InputGroup>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
