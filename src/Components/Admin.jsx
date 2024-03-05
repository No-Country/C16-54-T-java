import "./styles.css";
import img from "../assets/img/logob.png";
import { Button, IconButton } from "@chakra-ui/button";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import provisoria from "../assets/img/ffff.jpg";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin">
      <div className="logo">
        <img src={img} />
        <h3>ADMINISTRADOR</h3>
      </div>
      <div className="admin-container">
        <div className="nav-container">
        <Link to={"Agregar-juego"}>
          <Button
            variant="solid"
            color={"#0D1A2C"}
            bg={"#879DBB"}
            _hover={{ bg: "#9FEADD" }}
          >
            AGREGAR JUEGO
          </Button>
          </Link>
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
          <Menu>
            <MenuButton
              variant="solid"
              color={"#0D1A2C"}
              w={"220px"}
              height={"2.5rem"}
              bg={"#879DBB"}
              _hover={{ bg: "#9FEADD" }}
              fontWeight={"bold"}
              borderRadius={"8px"}
            >
              ORDENAR POR
            </MenuButton>
            <Portal>
              <MenuList
                bg={"#879DBB"}
                color={"#0D1A2C"}
                flexDir={"column"}
                display={"flex"}
                border={"none"}
              >
                <MenuItem
                  bg={"#879DBB"}
                  fontWeight="semibold"
                  justifyContent={"center"}
                  borderTop={"solid 1px"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                >
                  MÁS RELEVANTES
                </MenuItem>
                <MenuItem
                  bg={"#879DBB"}
                  fontWeight="semibold"
                  justifyContent={"center"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                >
                  MENOR PRECIO
                </MenuItem>
                <MenuItem
                  bg={"#879DBB"}
                  fontWeight="semibold"
                  justifyContent={"center"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                >
                  MAYOR PRECIO
                </MenuItem>
                <MenuItem
                  bg={"#879DBB"}
                  fontWeight="semibold"
                  justifyContent={"center"}
                  borderTop={"solid 1px"}
                  _hover={{ bg: "#9FEADD", color: "#0D1A2C" }}
                >
                  A - Z
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </div>
        <div className="juegos">
          <div className="datos">
            <h4>Nombre:</h4>
            <h4>Categoria</h4>
            <h4>Precio</h4>
          </div>
          <div className="img-datos">
            <img src={provisoria} />
          </div>
          <div className="description-datos">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            
          </div>
        </div>
        <div className="juegos"></div>
        <div className="juegos"></div>
      </div>
    </div>
  );
};

export default Admin;
