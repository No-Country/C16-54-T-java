import { Button, Input, Text } from "@chakra-ui/react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <form action="">
        <h1>REGISTRO</h1>
        <div className="reg-1">
          <Text color={"#9FEADD"}>Nombre</Text>
          <Input required background={"#C2CEDE"} type="text" w={"18rem"} />
          <Text color={"#9FEADD"}>Apellido</Text>
          <Input required background={"#C2CEDE"} type="text" w={"18rem"} />
        </div>
        <div className="reg-2">
          <Text color={"#9FEADD"}>Email</Text>
          <Input required background={"#C2CEDE"} type="text" w={"18rem"} />
          <Text color={"#9FEADD"}>Contraseña</Text>
          <Input required background={"#C2CEDE"} type="text" w={"18rem"} />
        </div>
        <div className="reg-3">
          <Text color={"#9FEADD"}>Rol</Text>
          <Input required background={"#C2CEDE"} type="text" w={"18rem"} />
        </div>

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
          Enviar Registro
        </Button>
      </form>
    </div>
  );
};

export default Register;
