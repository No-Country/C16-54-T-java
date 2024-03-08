import "./styles.css";
import {
  Button,
  Box,
  Flex,
  Heading,
  Stack,
  CardBody,
  StackDivider,
  CardHeader,
  Card,
  Text,
} from "@chakra-ui/react";

const Cart = ({ cart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, game) => total + game.price, 0);
  };
  //   const { products, removeItem, clear } = useContext(CartContext);

  return (
    <div className="cart">
      <Flex className="cart-container">
        <Card
          margin={"auto"}
          background={"#1B314E"}
          color={"#9FEADD"}
          w={"360px"}
        >
          <CardHeader margin={"auto"}>
            <Heading size="md">Resumen de compra</Heading>
          </CardHeader>

          <CardBody>
            <Stack
              divider={<StackDivider />}
              spacing="4"
              borderColor={"#9FEADD"}
            >
              <Box>
                <Heading
                  m={"1.6rem"}
                  size="sm"
                  textTransform="uppercase"
                ></Heading>
              </Box>
              <Box fontWeight={"500"}>
                {cart.map((game, index) => (
                  <div key={index}>
                    <p className="cart-date">
                      {game.name} - Precio: ${game.price}
                    </p>
                  </div>
                ))}
                <Heading size="sm" textTransform="uppercase" marginTop={"6rem"}>
                  <Text>Total:${calculateTotal()}</Text>
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginTop={"1rem"}>
                  {/* <Button
                    variant="solid"
                    color={"#0D1A2C"}
                    bg={"#879DBB"}
                    margin={"1rem"}
                    _hover={{ bg: "#9FEADD" }}
                  >
                    Limpiar carrito
                  </Button> */}

                  <Button
                    variant="solid"
                    color={"#0D1A2C"}
                    bg={"#879DBB"}
                    margin={"1rem"}
                    _hover={{ bg: "#9FEADD" }}
                  >
                    {" "}
                    Confirmar
                  </Button>
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
};

export default Cart;
