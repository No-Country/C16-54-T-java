import { Button, Input, Text } from "@chakra-ui/react";
import "./styles.css";
import axios from "axios";
/* import { useState } from "react"; */

const Register = () => {

 /*  const [nombre, setNombre] = useState("");
  const [apellido , setApellido] = useState("");
  const [email, setEmail] = useState(""); */

  const handleSubmit = async (e) => {
    console.log("boton presionado");
    e.preventDefault();

    const name = document.getElementById("nombre").value;
    const lastname = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("contraseña").value;
    const role = document.getElementById("rol").value;

    const data = {
      name: name,
      lastName: lastname,
      email: email,
      password: password,
      role: role
    }
    try {
      const response = await axios.post("http://localhost:8080/v1/api/auth/register", data)

      if (response.status == 200) {
        window.location.href = '/login'
      } else {
        // Manejar el caso de error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
    }
  };
  
  return (
    
    <div className="register">
      <div className="image-container">
        <img src="./s.jpg"></img>
      </div>
      <div className="register-container">
        <div className="bg-register">
        <form method="POST" onSubmit={handleSubmit}>
        <h1>REGISTRO</h1>
        
          <Text color={"#9FEADD"}>Nombre</Text>
          <Input required id="nombre" background={"#C2CEDE"} type="text" w={"18rem"} h={"2rem"} fontWeight={"bold"} />
          <Text color={"#9FEADD"}>Apellido</Text>
          <Input id="apellido" required background={"#C2CEDE"} type="text" w={"18rem"} h={"2rem"} fontWeight={"bold"}/>
        
        
          <Text color={"#9FEADD"}>Email</Text>
          <Input required id="email" background={"#C2CEDE"} type="email" w={"18rem"} h={"2rem"} fontWeight={"bold"}/>
          <Text color={"#9FEADD"}>Contraseña</Text>
          <Input required id="contraseña" background={"#C2CEDE"} type="password" w={"18rem"} h={"2rem"} fontWeight={"bold"} />
        
          <Text color={"#9FEADD"}>Confirmar Contraseña</Text>
          <Input required id="confirmar" background={"#C2CEDE"} type="password" w={"18rem"} h={"2rem"} fontWeight={"bold"} />
        
          <Input required id="rol" value={"USER"} hidden background={"#C2CEDE"} type="text" w={"18rem"} h={"2rem"}
          />
        

        <Button
          
          onClick={handleSubmit}
          id="btn-registro"
          bg={"#879DBB"}
          color={"#0D1A2C"}
          colorScheme="blackAlpha"
          w={"7rem"}
          height={"1.5rem"}
          fontWeight={"500"}
          type="submit"
          m={"1rem auto 0 auto"}
          _hover={{ bg: '#9FEADD' }}
        >
          Crear cuenta
        </Button>

      </form>
        </div>
      
      </div>
      
    </div>
  );
  }

export default Register;