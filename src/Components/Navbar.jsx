import "./styles.css";
import {
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Image } from "@chakra-ui/react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";


const Navbar = ({ setSearchTerm }) => {
  const [display, changeDisplay] = useState("none");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  

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
          spacing={{ base: 10, md: 10, lg: 16 }}
          align="center"
          paddingLeft={"1rem"}
          margin={"auto"}
        >
          <Link to={"/"}>
          <Menu>
              <MenuButton
                as={Button}
                _active={{
                  transform: "scale(1.20)",
                  textDecoration: "underline"
                }}
                color={"#9BFFF3"}
                variant="link"
              >
                HOME
              </MenuButton>
            </Menu>
          </Link>

          <Box>
            <Menu>
              <MenuButton
                as={Button}
                color={"#9BFFF3"}
                variant="link"
                rightIcon={<ChevronDownIcon />}
                _active={{
                  transform: "scale(1.20)",
                  textDecoration: "underline"
                }}
              >
                TIENDA
              </MenuButton>
              <MenuList bg={"#0D1A2C"} padding={"0"} border={"none"}>
                <MenuItem
                  color={"#9BFFF3"}
                  bg={"#0D1A2C"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                  fontWeight={"bold"}
                >
                  <Link to={""}>JUEGOS DE ACCIÓN</Link>
                </MenuItem>
                <MenuItem
                  color={"#9BFFF3"}
                  bg={"#0D1A2C"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                  fontWeight={"bold"}
                >
                  <Link to={""}>JUEGOS DE DEPORTES</Link>
                </MenuItem>
                <MenuItem
                  color={"#9BFFF3"}
                  bg={"#0D1A2C"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                  fontWeight={"bold"}
                >
                  <Link to={""}>JUEGOS DE ESTRATEGIA</Link>
                </MenuItem>
                <MenuItem
                  color={"#9BFFF3"}
                  bg={"#0D1A2C"}
                  borderTop={"1px"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                  fontWeight={"bold"}
                >
                  <Link to={"All-the-games"}>VER TODOS</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Link to={"/Library"}>
            <Menu>
              <MenuButton
                as={Button}
                _active={{
                  transform: "scale(1.20)",
                  textDecoration: "underline"
                }}
                color={"#9BFFF3"}
                variant="link"
              >
                BIBLIOTECA
              </MenuButton>
            </Menu>
          </Link>

          <Link to={"About-us"}>
          <Menu>
              <MenuButton
                as={Button}
                _active={{
                  transform: "scale(1.20)",
                  textDecoration: "underline"
                }}
                color={"#9BFFF3"}
                variant="link"
              >
                NOSOTROS
              </MenuButton>
            </Menu>
          </Link>
          {/* <Link to={"/Admin"}>
          <Menu>
              <MenuButton
                as={Button}
                _active={{
                  transform: "scale(1.20)",
                  textDecoration: "underline"
                }}
                color={"#9BFFF3"}
                variant="link"
                marginRight={"2rem"}
              >
                ADMINISTRADOR
              </MenuButton>
            </Menu>
          </Link> */}
        </Stack>
      </Flex>

{/* Buscador--------------------------------------- */}

      <Flex className="input" display={["none", "none", "flex", "flex"]}>
        <InputGroup w={[100, 300, 300]}>
          <Input pr="9rem" placeholder="Buscador..." bg={"white"} onChange={handleSearch}/>
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
        <Link to={"/cart"}>
          <Button
            bg={"black"}
            padding={"6px"}
            height={"none"}
            _hover={{ bg: "#9FEADD" }}
          >
            <MdOutlineLocalGroceryStore color={"#9BFFF3"} />
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button
            _hover={{ bg: "#9FEADD" }}
            bg={"black"}
            padding={"6px"}
            height={"none"}
            marginLeft={"1rem"}
          >
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
        bgGradient="linear(rgba(0,0,0,1), rgba(43,12,95,1), rgba(0,0,0,1))"
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
          left="28%"
          top="10%"
        >
          <Link to={"/"}>
            <Button
              color={"#9BFFF3"}
              fontSize={"1.5rem"}
              margin={"1.2rem"}
              variant="link"
            >
              HOME
            </Button>
          </Link>

          <Button
            color={"#9BFFF3"}
            fontSize={"1.5rem"}
            margin={"1.2rem"}
            variant="link"
          >
            TIENDA
          </Button>
          <Button
            color={"#9BFFF3"}
            fontSize={"1.5rem"}
            margin={"1.2rem"}
            variant="link"
          >
            BIBLIOTECA
          </Button>
          <Button
            color={"#9BFFF3"}
            fontSize={"1.5rem"}
            margin={"1.2rem"}
            variant="link"
          >
            NOSOTROS
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
