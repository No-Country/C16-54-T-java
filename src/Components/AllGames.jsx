import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import img from "../assets/img/bg-games.jpg";
import "./styles.css";
import { FaRegHeart } from "react-icons/fa";

const AllGames = () => {
  return (
    <div className="games">
      <div className="image-games">
        <img src={img} />
        <Menu>
            <MenuButton color={"#9FEADD"} fontSize={"1.2rem"} fontWeight={"bold"} w={"220px"} position={"absolute"} top={"35%"} right={"10%"} zIndex={"10"} bg={"#0D1A2C"} >ORDENAR POR</MenuButton>
            <Portal>
              <MenuList bg={"#0D1A2C"} color={"#9FEADD"} flexDir={"column"} display={"flex"} border={"none"}>
                <MenuItem bg={"#0D1A2C"} fontWeight='semibold' justifyContent={"center"} borderTop={"solid 1px"} _hover={{ bg: '#9FEADD', color:'#0D1A2C' }}>MÁS RELEVANTES</MenuItem>
                <MenuItem bg={"#0D1A2C"} fontWeight='semibold' justifyContent={"center"} _hover={{ bg: '#9FEADD', color:'#0D1A2C' }}>MENOR PRECIO</MenuItem>
                <MenuItem bg={"#0D1A2C"} fontWeight='semibold' justifyContent={"center"} _hover={{ bg: '#9FEADD', color:'#0D1A2C' }}>MAYOR PRECIO</MenuItem>
                <MenuItem bg={"#0D1A2C"} fontWeight='semibold' justifyContent={"center"} borderTop={"solid 1px"}  _hover={{ bg: '#9FEADD', color:'#0D1A2C' }}>A - Z</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
      </div>
      <div className="games-container">
        <div className="title-tienda">
          <h2>TIENDA</h2>
          <div className="filter">
            <h3>CATEGORÍAS</h3>
            <Divider color={"#9FEADD"} />
            <Checkbox defaultChecked color={"#9FEADD"} marginTop={"1rem"}>
              ACCIÓN
            </Checkbox>
            <Checkbox defaultChecked color={"#9FEADD"} marginTop={"1rem"}>
              DEPORTES
            </Checkbox>
            <Checkbox defaultChecked color={"#9FEADD"} marginTop={"1rem"}>
              ESTRATEGÍA
            </Checkbox>
          </div>
          
        </div>
        <div className="cards">
          <Flex
            alignItems={"center"}
            p={"1rem"}
            gap={"1rem"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
          >
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
            <Card maxW={{ base: "60%", md: "30%", lg: "30%" }} bg={"#1B314E"}>
              <CardBody>
                <Image
                  src={img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color={"white"}>
                    Valorant
                  </Heading>
                  <Text color={"white"} fontSize="2xl">
                    $450
                  </Text>
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
          </Flex>
        </div>
        
      </div>
    </div>
  );
};

export default AllGames;