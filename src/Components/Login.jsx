import { Button } from "@chakra-ui/button";
import "./login.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Checkbox, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src="./s.jpg" />
      </div>
      <div className="icons-container">
        <div className="icons">
          <Button bg={"none"} _hover={"none"}>
            <CiFacebook color="#9FEADD" fontSize={"1.2rem"} />
          </Button>
          <Button bg={"none"} _hover={"none"}>
            <FaInstagram color="#9FEADD" fontSize={"1.2rem"} />
          </Button>
          <Button bg={"none"} _hover={"none"}>
            <FaWhatsapp color="#9FEADD" fontSize={"1.2rem"} />
          </Button>
          <Button bg={"none"} _hover={"none"}>
            <SiGmail color="#9FEADD" fontSize={"1.2rem"} />
          </Button>
        </div>
        <div className="copyright">
          © GAMESTOPIA 2024. Todos los derechos reservados.
        </div>
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
            />
            <Text color={"#9FEADD"}>Usuario o email</Text>
            <Input
              required
              marginTop={"2rem"}
              background={"#C2CEDE"}
              type="email"
              w={"18rem"}
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
              bg={"#879DBB"}
              color={"#0D1A2C"}
              colorScheme="blackAlpha"
              w={"7rem"}
              height={"1.5rem"}
              fontWeight={"500"}
              type="submit"
              m={"1rem auto 0 auto"}
              _hover={"#0B1626"}
            >
              INICIAR SECION
            </Button>
          </form>
          <Text fontSize={".8rem"} color={"#9FEADD"} marginTop={"2rem"}>
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
