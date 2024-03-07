// import { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
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

const Cart = () => {
  //   const { products, removeItem, clear } = useContext(CartContext);

  return (
    <div className="cart">
      <Flex className="cart-container">
        <Card margin={"auto"} background={"#1B314E"} color={"#9FEADD"}>
          <CardHeader margin={"auto"}>
            <Heading size="md" textTransform="uppercase">Carrito de compras</Heading>
          </CardHeader>

          <CardBody>
          <Flex alignItems={"center"} p={"10px"}>
          <Heading size="md" margin={"1rem"}>PRODUCTO</Heading>
          <Heading size="md" margin={"1rem"}>SUBTOTAL</Heading>      
          </Flex>
            <Stack
              divider={<StackDivider />}
              spacing="6"
              borderColor={"#9FEADD"}
            >
              <Box>
                <Heading m={"0px"} size="xs" textTransform="uppercase">
                
                  {/* {products.map((producto, indx) => (
                    <Flex alignItems={"center"} p={"1rem"} key={indx}>
                      <Box marginRight={"1rem"} boxSize={"32px"}>
                        <Image src={producto.Imagen} alt="imagen" />
                      </Box>
                      {producto.Titulo} - Cantidad: {producto.quantity}{" "}
                      <Button
                        borderRadius={"50%"}
                        bg={"#B93D3D"}
                        marginLeft={"1rem"}
                        size={"sm"}
                        onClick={() => removeItem(producto.id)}
                      >
                        X
                      </Button>
                    </Flex>
                  ))} */}
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginTop={"6rem"}>
                  <Text>
                    precio total = $
                    {/* {products.reduce(
                      (pv, cv) => pv + cv.Precio * cv.quantity,
                      0
                    )} */}
                  </Text>
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginTop={"1rem"}>
                  <Button
                    variant="solid"
                    color={"#0D1A2C"}
                    bg={"#879DBB"}
                    margin={"1rem"}
                    _hover={{ bg: "#9FEADD" }}
                  >
                    Limpiar carrito
                  </Button>

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
