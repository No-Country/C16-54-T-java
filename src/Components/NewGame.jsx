import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import "./styles.css";
import { Input, Text } from "@chakra-ui/react";

const NewGame = () => {
  return (
    <div className="new-game">
      <div className="title-game">
        <h2>NUEVO JUEGO</h2>
      </div>
      <div className="datos-new-game">
        <div className="datos-primarios">
          <div className="inputs">
            <Text color={"#9FEADD"}>Nombre</Text>
            <Input
              id="apellido"
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Categoria</Text>
            <Input
              id="apellido"
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Precio</Text>
            <Input
              id="apellido"
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
          </div>
          <div className="video-img">
            <Text color={"#9FEADD"}>Agregar Imagen</Text>
            <Input
              id="apellido"
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"100%"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Agregar Video</Text>
            <Input
              id="apellido"
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"100%"}
              fontWeight={"bold"}
            />
          </div>
        </div>
        <div className="datos-secundarios">
          <Text color={"#9FEADD"}>Descripción</Text>
          <Input
            id="apellido"
            required
            background={"#C2CEDE"}
            type="text"
            w={"100%"}
            h={"100%"}
            fontWeight={"bold"}
            marginTop={"1rem"}
          />
          <Text color={"#9FEADD"} marginTop={"2rem"}>
            Requisitos del sistema
          </Text>

          <div className="requisitos">
            <div className="minimos">
              <Text color={"#9FEADD"}>Mínimos</Text>
              <Input
                id="apellido"
                required
                background={"#C2CEDE"}
                type="text"
                w={"100%"}
                h={"100%"}
                fontWeight={"bold"}
                marginTop={"1rem"}
              />
            </div>
            <div className="recomendados">
              <Text color={"#9FEADD"}>Recomendados</Text>
              <Input
                id="apellido"
                required
                background={"#C2CEDE"}
                type="text"
                w={"100%"}
                h={"100%"}
                fontWeight={"bold"}
                marginTop={"1rem"}
              />
            </div>
            
          </div>
          <div className="agregar">
          <Link to={""}>
            <Button
              variant="solid"
              color={"#0D1A2C"}
              bg={"#879DBB"}
              _hover={{ bg: "#9FEADD" }}
            >
              AGREGAR JUEGO
            </Button>
          </Link>
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default NewGame;
