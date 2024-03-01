import { Button } from "@chakra-ui/button";
import "./styles.css";
import { Checkbox, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useState } from "react";

const Login = () => {
  // const [email, setEmail] = useState('');
  // const[password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{
      const response = await axios.post('http://localhost:8080/v1/api/auth/login', {
        email: email,
        password: password
      })

      //Si la respuesta es ok, redirecciona
      // if(response.status == 200){
      //   window.location.href = '/About-us'
      // }

      const token = response.data.token;

      //Almacenar el JWT en el localStorage
      localStorage.setItem('token', token)
      console.log(localStorage)
      
    } catch (error) {
      console.error('Error al iniciar sesión: ', error)
    }
  };

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
              id="email"
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
              id="password"
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
              onClick={handleSubmit}
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