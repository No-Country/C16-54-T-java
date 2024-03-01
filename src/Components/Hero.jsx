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



const Hero = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

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
        
          <Card maxW={{ base: "60%", md: "25%", lg: "25%" }} bg={"#1B314E"}>
            <CardBody>
              <Image
                src={img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"white"}>Valorant</Heading>
                <Text color={"white"} fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider color={"#9FEADD"}/>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" color={"#0D1A2C"} bg={"#879DBB"} _hover={{ bg: '#9FEADD' }}>
                  Comprar
                </Button>
                <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue" _hover={{ bg: '#9FEADD' }}>
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
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"white"}>Valorant</Heading>

                <Text color={"white"} fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider color={"#9FEADD"}/>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" color={"#0D1A2C"} bg={"#879DBB"} _hover={{ bg: '#9FEADD' }}>
                  Comprar
                </Button>
                <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue" _hover={{ bg: '#9FEADD' }}>
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
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" color={"white"}>Valorant</Heading>

                <Text color={"white"} fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider color={"#9FEADD"}/>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" color={"#0D1A2C"} bg={"#879DBB"} _hover={{ bg: '#9FEADD' }}>
                  Comprar
                </Button>
                <Button fontSize={{ base: 15, md: 15, lg: 30 }} variant="ghost" colorScheme="blue" _hover={{ bg: '#9FEADD' }}>
                  <FaRegHeart />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
              
      </div>
    </div>
  );
};

export default Hero;
