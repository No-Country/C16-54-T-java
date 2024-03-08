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
  Stack,
  Switch,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import provisoria from "../assets/img/ffff.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const Admin = () => {
  const [games, setGames] = useState([]);

  /*useEffect(() => {

    fetch("http://localhost:8080/v1/api/admin/listGames")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error!! ${response.status}: ${response.statusText}`);
    }
    return response.json();
})
    .then(data => setGames(data))
    .catch(error => console.error("Error al obtener la lista de juegos: ", error));

  },[])
  */
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener el token del localStorage

        const response = await axios.get(
          "http://localhost:8080/v1/api/admin/listGames",
          {
            headers: {
              'Authorization': `Bearer ${token}` // Incluir el token en el encabezado
            }
          }
        );

         /*if (response.status === 200) {
          
          setGames(response.data); // Establecer los juegos obtenidos del servidor
        } 
        // Obtener las imágenes de los juegos
        const gamesWithImages = await Promise.all(gamesData.map(async game => {
          
          const imageResponse = await fetch(`http://localhost:8080/v1/api/game/getPhoto?idGame=${game.id}`);
          if (!imageResponse.ok) {
            throw new Error(`Error al obtener la imagen del juego ${game.name}: ${imageResponse.status}`);
          }
          const blob = await imageResponse.blob();
          const imageUrl = URL.createObjectURL(blob);
          return { ...game, imageUrl };
        }));
        setGames(gamesWithImages);
        */
        if (response.status === 200) {
          const gamesData = response.data;

          // Obtener las imágenes de los juegos
          const gamesWithImages = await Promise.all(gamesData.map(async game => {
            const imageResponse = await fetch(`http://localhost:8080/v1/api/game/getPhoto?idGame=${game.id}`);
            if (!imageResponse.ok) {
              throw new Error(`Error al obtener la imagen del juego ${game.name}: ${imageResponse.status}`);
            }
            const blob = await imageResponse.blob();
            const imageUrl = URL.createObjectURL(blob);
            return { ...game, imageUrl };
          }));

          setGames(gamesWithImages);
      }
        
      } catch (error) {
        console.error("Error al obtener la lista de juegos:", error);
      }

    };

    fetchGames(); // Llamar a la función para obtener los juegos
  }, []); 
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
        {games.map(game => (
        <div key={game.id} className="juegos">
          <div className="datos">
            <h4>{game.name}</h4>
            <h4>{game.category}</h4>
            <h4>{game.price}</h4>
          </div>
          <div className="img-datos">
            <img src={game.imageUrl} alt={game.name} />
          </div>
          <div className="description-datos">
            {game.description}
          </div>
          <div className="estados">
              <div className="text-estado">
                <h4>Estado</h4>
                <Stack direction="row">
                  <Switch colorScheme="teal" size="lg" />
                </Stack>
              </div>

              <Button
                variant="solid"
                color={"#0D1A2C"}
                bg={"#879DBB"}
                _hover={{ bg: "#9FEADD" }}
              >
                Editar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
