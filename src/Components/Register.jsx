import { Button, Input, Text } from "@chakra-ui/react";
import "./register.css";

const Register = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      nombre: "nombre",
      apellido: "apellido",
      email: "email",
      contraseña: "contraseña",
      rol: "rol"
    };
    try {
      const response = await fetch('http://localhost:8080/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Registro exitoso, puedes redirigir a otra página o mostrar un mensaje de éxito
      } else {
        // Manejar el caso de error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
    }
  };


  
  return (
    <div className="register">
      <form method="POST">
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
          _hover={"#0B1626"}
        >
          Enviar Registro
        </Button>
      </form>
    </div>
  );
};

export default Register;
