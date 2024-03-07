import img from "../assets/img/library.jpg";
import "./styles.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

const Library = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/api/game/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error!! ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => setGames(data))
      .catch((error) =>
        console.error("Error al obtener la lista de juegos: ", error)
      );
  }, []);
  return (
    <div className="games">
      <div className="image-games">
        <img src={img} />
      </div>
      <div className="games-container">
        <h3 className="mis-juegos">MIS JUEGOS</h3>
        <div className="title-tienda">
          <h2>BIBLIOTECA</h2>
        </div>
        <div className="cards-biblioteca">
          <Flex
            alignItems={"center"}
            p={"1rem"}
            gap={"1rem"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
          >
            {games.map((game) => (
              <Card
                key={game.id}
                maxW={{ base: "60%", md: "30%", lg: "30%" }}
                bg={"#1B314E"}
              >
                <CardBody>
                  <Image
                    src={img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" color={"white"}>
                      {game.name}
                    </Heading>
                    <Text color={"white"}>{game.description}</Text>
                    
                    
                  </Stack>
                </CardBody>
                <Divider color={"#9FEADD"} />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      color={"#0D1A2C"}
                      bg={"#879DBB"}
                      _hover={{ bg: "#9FEADD" }}
                    >
                      PLAY
                    </Button>
                    <Button
                      fontSize={{ base: 15, md: 15, lg: 30 }}
                      variant="ghost"
                      colorScheme="blue"
                      _hover={{ bg: "#9FEADD" }}
                    >
                      <FaRegHeart />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        </div>

        <div className="cards-deseos">
        <h3 className="mis-deseos">LISTA DE DESEOS</h3>
          <Flex
            alignItems={"center"}
            p={"1rem"}
            gap={"1rem"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
          >
            {games.map((game) => (
              <Card
                key={game.id}
                maxW={{ base: "60%", md: "30%", lg: "30%" }}
                bg={"#1B314E"}
              >
                <CardBody>
                  <Image
                    src={img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" color={"white"}>
                      {game.name}
                    </Heading>
                    <Text color={"white"}>{game.description}</Text>
                    
                    
                  </Stack>
                </CardBody>
                <Divider color={"#9FEADD"} />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      color={"#0D1A2C"}
                      bg={"#879DBB"}
                      _hover={{ bg: "#9FEADD" }}
                    >
                      PLAY
                    </Button>
                    <Button
                      fontSize={{ base: 15, md: 15, lg: 30 }}
                      variant="ghost"
                      colorScheme="blue"
                      _hover={{ bg: "#9FEADD" }}
                      color={"#9FEADD"}
                    >
                      <FaRegHeart />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Library;
