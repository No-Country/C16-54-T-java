/**
 * Componente de Registro
 *
 * Representa un formulario de registro de usuario utilizando componentes Chakra UI.
 * Utiliza hooks de React (useState) para gestionar los datos del formulario y Axios para realizar solicitudes HTTP.
 *
 * Estado:
 * - nombre: Variable de estado para el nombre del usuario.
 * - apellido: Variable de estado para el apellido del usuario.
 * - email: Variable de estado para la dirección de correo electrónico del usuario.
 * - password: Variable de estado para la contraseña del usuario.
 * - role: Variable de estado para el rol del usuario (valor predeterminado: "USER").
 *
 * Funciones:
 * - handleSubmit: Maneja la presentación del formulario. Envía una solicitud POST al servidor con los datos del usuario.
 *                 Registra mensajes de éxito o error en la consola.
 *
 * Estructura JSX:
 * - El componente está dividido en secciones: "register", "image-container", "register-container" y "bg-register".
 * - Dentro del formulario, se utilizan componentes Input y Text de Chakra UI para varios campos del formulario.
 * - El botón activa la función handleSubmit al hacer clic.
 */

import { useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import "./styles.css";
import axios from "axios";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [role, setRole] = useState("USER");

  //Validaciones---------------------------------

  const [showErrorNombre, setShowErrorNombre] = useState(false);
  const [showErrorApellido, setShowErrorApellido] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  
  
  const handleBlur = () => {
    // Validación y configuración para mostrar el error al salir del campo
    setShowErrorNombre(nombre.trim() === "");
    
  };
  const handleBlurApellido = () => {
    setShowErrorApellido(apellido.trim() === ""); 
  };

  //Validacion de e-mail
  const isValidEmail = (email) => {
    // Expresión regular para validar un email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleBlurMail = () =>{
    setShowErrorEmail(email.trim() === "" || !isValidEmail(email))
  }

  const handleSubmit = async (e) => {
    console.log("presionado")

    e.preventDefault();

    const data = {
      name: nombre,
      lastName: apellido,
      email: email,
      password: password,
      role: role,
    };
    try {
<<<<<<< HEAD
      const response = await axios.post("http://localhost:8080/v1/api/auth/register", data)
=======
      const response = await axios.post("http://localhost:8080/auth/register", data);
>>>>>>> 8c201c94442ae96f91ed257b3332820959ce8719

      if (response.status == 200) {
        window.location.href = '/login'
      } else {
        // Manejar el caso de error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
    }
  }
  ;

  return (
    <div className="register">
      <div className="image-container">
        <img src="./s.jpg" alt="some description"></img>
      </div>
      <div className="register-container">
        <div className="bg-register">
          <form method="POST" onSubmit={handleSubmit}>
            <h1>REGISTRO</h1>

            <Text color={"#9FEADD"}>Nombre</Text>
            <Input
              required
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={handleBlur}
              background={"#C2CEDE"}
              type="text"
              w={"18rem"}
              h={"2rem"}
              fontWeight={"bold"}
            />
            {showErrorNombre  ? <p style={{color: '#FF6666'}}> Rellena este campo</p> : null}
            <Text color={"#9FEADD"}>Apellido</Text>
            <Input
              id="apellido"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              onBlur={handleBlurApellido}
              background={"#C2CEDE"}
              type="text"
              w={"18rem"}
              h={"2rem"}
              fontWeight={"bold"}
            />
            {showErrorApellido  ? <p style={{color: '#FF6666'}}> Rellena este campo</p> : null}

            <Text color={"#9FEADD"}>Email</Text>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlurMail}
              background={"#C2CEDE"}
              type="email"
              w={"18rem"}
              h={"2rem"}
              fontWeight={"bold"}
            />

{showErrorEmail  ? <p style={{color: '#FF6666'}}> debe ser un email valido</p> : null}

            <Text color={"#9FEADD"}>Contraseña</Text>

            <Input
              required
              id="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              background={"#C2CEDE"}
              type="password"
              w={"18rem"}
              h={"2rem"}
              fontWeight={"bold"}
            />

            <Text color={"#9FEADD"}>Confirmar Contraseña</Text>

            <Input
              required
              id="confirmar"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              background={"#C2CEDE"}
              type="password"
              w={"18rem"}
              h={"2rem"}
              fontWeight={"bold"}
            />
            {password != password2  ? <p style={{color: '#FF6666'}}> las contraseñas deben coincidir</p> : null}

            <Input
              required
              id="rol"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              hidden
              background={"#C2CEDE"}
              type="text"
              w={"18rem"}
              h={"2rem"}
            />
{!isValidEmail(email) || nombre.trim() === "" || apellido.trim() === "" || password !== password2 || password.trim() === "" ? <Button
              disabled
              bg={"#38748E"}
              color={"#0D1A2C"}
              colorScheme="blackAlpha"
              w={"7rem"}
              height={"1.5rem"}
              fontWeight={"500"}
              m={"1rem auto 0 auto"}
              _hover={{ bg: "#9FEADD" }}
              
            >
              Crear cuenta
            </Button>  : <Button
              onClick={handleSubmit}
              id="btn-registro"
              bg={"#ffffff"}
              color={"#0D1A2C"}
              colorScheme="blackAlpha"
              w={"7rem"}
              height={"1.5rem"}
              fontWeight={"500"}
              type="submit"
              m={"1rem auto 0 auto"}
              _hover={{ bg: "#9FEADD" }}
            >
              Crear cuenta
            </Button> }
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;