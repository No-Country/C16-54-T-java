import { useEffect, useRef, useState } from "react";
import { data } from "../assets/data";
import logoblanco from "../assets/img/logoblanco.svg";
import "./styles.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import img from "../assets/img/ffff.jpg";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = ({ addToCart }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGamesAndImages = async () => {
      try {
        // Obtener la lista de juegos
        const gamesResponse = await fetch(
          "http://localhost:8080/v1/api/portal/list"
        );
        if (!gamesResponse.ok) {
          throw new Error(
            `Error al obtener la lista de juegos: ${gamesResponse.status}`
          );
        }
        const gamesData = await gamesResponse.json();

        // Obtener las imágenes de los juegos
        const gamesWithImages = await Promise.all(
          gamesData.map(async (game) => {
            const imageResponse = await fetch(
              `http://localhost:8080/v1/api/game/getPhoto?idGame=${game.id}`
            );
            if (!imageResponse.ok) {
              throw new Error(
                `Error al obtener la imagen del juego ${game.name}: ${imageResponse.status}`
              );
            }
            const blob = await imageResponse.blob();
            const imageUrl = URL.createObjectURL(blob);
            return { ...game, imageUrl };
          })
        );

        // Establecer los últimos tres juegos en el estado
        setGames(gamesWithImages.slice(-3));
      } catch (error) {
        console.error(
          "Error al obtener la lista de juegos y las imágenes:",
          error
        );
      }
    };

    fetchGamesAndImages();
  }, []);

  // Función para agregar un juego al carrito
  const handleAddToCart = (game) => {
    addToCart(game);
  };

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

  function filtrarUltimosTres(array) {
    // Si la longitud del array es menor o igual a 3, devolvemos el array completo
    if (games.length <= 3) {
      return array;
    } else {
      // Si la longitud es mayor a 3, devolvemos los últimos tres elementos
      return games.slice(array.length - 3);
    }
  }

  // const result = games.filter(game => game.price === 68);
  const ultimosTres = filtrarUltimosTres(games);
  console.log(ultimosTres);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  return (
    <div className="hero">
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={() => scrollToImage("next")}>
            &#10093;
          </div>
          <div className="text-container">
            <div className="img-hero">
              <img src={logoblanco} />
            </div>
            <div className="title">
              <h3>Bienvenido a GamesTopia</h3>
            </div>
            <div className="text">
              <p>
                el paraíso definitivo para los entusiastas de los videojuegos.
                En nuestra plataforma, te sumergirás en un mundo vibrante y
                emocionante donde encontrarás una amplia selección de juegos y
                experiencias de entretenimiento digital.
              </p>
            </div>
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <img className="hero-img" src={item.imgUrl} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="novedades">
        <h2 className="novedades-title">Novedades</h2>
        <div className="novedades-container">
          {ultimosTres.map((game) => (
            <Card
              key={game.id}
              maxW={{ base: "60%", md: "25%", lg: "25%" }}
              bg={"#1B314E"}
            >
              <CardBody>
                <Image src={img} alt={game.name} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    {game.name}
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    ${game.price}
                  </Text>
                  <Link to={`/Card/${game.id}`}>
                    <Button
                      position={"absolute"}
                      right={"0"}
                      bottom={"20%"}
                      fontSize={{ base: 10, md: 10, lg: 15 }}
                      variant="ghost"
                      colorScheme="blue"
                      _hover={{ bg: "none" }}
                    >
                      VER MÁS
                    </Button>
                  </Link>
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
                    onClick={() => handleAddToCart(game)}
                  >
                    Comprar
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
          {/* 
              </Stack>
            </CardBody>
            <Divider color={"#9FEADD"} />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" color={"white"} bg={"#879DBB"}>
                  Comprar
                </Button>
                <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue">
                  <FaRegHeart />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card> 
          ))}
>>>>>>> a510442dce4863c33bec470e5f4ca3af7ea0f372 */}
          {/* <Card maxW={{ base: "60%", md: "25%", lg: "25%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg" />
                <Stack mt="6" spacing="3">

                  <Heading size="md" color={"white"}>Valorant</Heading>

                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"#9FEADD"} />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" color={"white"} bg={"#879DBB"}>
                    Comprar
                  </Button>
                  <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue">
                    <FaRegHeart />
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            
            <Card maxW={{ base: "60%", md: "25%", lg: "25%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>Valorant</Heading>

                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              
              <Divider color={"#9FEADD"} />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" color={"white"} bg={"#879DBB"}>
                    Comprar
                  </Button>
                  <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue">
                    <FaRegHeart />
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
