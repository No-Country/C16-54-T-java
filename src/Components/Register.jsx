import { Button, Input, Text } from "@chakra-ui/react";
import "./register.css";

const Register = () => {

  // let boton =document.getElementById("btn-registro");
  // boton.addEventListener("click", evento => {
  //     registroPersona();
  // });

  // let registroPersona = async() => {


  // let campos = {};

  // campos.nombre = document.getElementById("nombre").value;
  // campos.apellido = document.getElementById("apellido").value;
  // campos.email = document.getElementById("email").value;
  // campos.contraseña = document.getElementById("contraseña").value;
  // campos.rol = document.getElementById("rol").value;

  // const peticion = await fetch("http:localhost:8080/auth/register"),
  // {
  //   method:'POST',
  //   headers: {
  //     'Accept' : 'aplication/json',
  //     'Content-Type' : 'aplication/json'
  //   },
  //   body: JSON.stringify(campos)
  // }
// }
  return (
    <div className="register">
      <form action="">
        <h1>REGISTRO</h1>
        <div className="reg-1">
          <Text color={"#9FEADD"}>Nombre</Text>
          <Input required id="nombre" background={"#C2CEDE"} type="text" w={"18rem"}  marginRight="2.5rem"/>
          <Text color={"#9FEADD"}>Apellido</Text>
          <Input id="apellido" required background={"#C2CEDE"} type="text" w={"18rem"}  marginRight="2.5rem"/>
        </div>
        <div className="reg-2">
          <Text color={"#9FEADD"}>Email</Text>
          <Input required id="email" background={"#C2CEDE"} type="text" w={"18rem"}  marginRight="2.5rem"/>
          <Text color={"#9FEADD"}>Contraseña</Text>
          <Input required id="contraseña" background={"#C2CEDE"} type="text" w={"18rem"}  marginRight="2.5rem"/>
        </div>
        <div className="reg-3">
          <Text color={"#9FEADD"}>Rol</Text>
          <Input required id="rol" background={"#C2CEDE"} type="text" w={"18rem"} marginRight="2.5rem"
          />
        </div>

        <Button
          id="btn-registro"
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
          Enviar Registro
        </Button>
      </form>
    </div>
  );
};

export default Register;
