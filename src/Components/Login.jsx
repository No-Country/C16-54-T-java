import { Button } from "@chakra-ui/button";
import "./styles.css";
/* import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; */
import { Checkbox, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="img-contenedor">
        <img src="./s.jpg" />
      </div>
      
      <div className="login-container">
        <div className="login">
          <div className="text">
            <h2>Hola,</h2>
            <p>bienvenido a GamesTopia!</p>
          </div>
          <form action="">
            <Input
              required
              marginTop={"2rem"}
              background={"#C2CEDE"}
              type="text"
              w={"18rem"}
              fontWeight={"bold"}
            />
            <Text w={"6rem"} color={"#9FEADD"}>
              Usuario o email
            </Text>
            <Input
              required
              marginTop={"2rem"}
              background={"#C2CEDE"}
              type="password"
              w={"18rem"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>
              Contraseña{" "}
              <Button
                height={"0"}
                background={"none"}
                _hover={"none"}
                color={"#9FEADD"}
                fontWeight={"300"}
                fontSize={".8rem"}
                marginLeft={"5.5rem"}
              >
                Olvidaste tu contraseña?
              </Button>
            </Text>
            <Checkbox defaultChecked color={"#9FEADD"} marginTop={"1rem"}>
              Recordarme
            </Checkbox>

            <Button
              color={"#0D1A2C"}
              bg={"#879DBB"}
              _hover={{ bg: "#9FEADD" }}
              colorScheme="blackAlpha"
              w={"7rem"}
              height={"2rem"}
              fontWeight={"bold"}
              type="submit"
              m={"1rem auto 0 auto"}
              alignItems={"center"}
              
            >
              INICIAR SECION
            </Button>
          </form>
          <Text
            fontSize={".8rem"}
            color={"#9FEADD"}
            marginTop={"2rem"}
            marginBottom={"2rem"}
            bottom={"0"}
          >
            ¿No tienes una cuenta?
            <Link to={"/register"}>
              <Button
                height={"0"}
                background={"none"}
                _hover={"none"}
                color={"#9FEADD"}
                fontWeight={"300"}
                fontSize={".8rem"}
                marginLeft={"2rem"}
              >
                REGISTRATE
              </Button>
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;