import { Button } from "@chakra-ui/button";
import "./styles.css";
import { Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const NewGame = () => {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  // const [clasificacion, setClasificacion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [desarrollador, setDesarrollador] = useState("");

  const handleSubmit = async (e) => {
    console.log("presionado");

    e.preventDefault();

    const data = {
      name: nombre,
      description: descripcion,
      price: precio,
      active: true,
      promotion: false,
      clasification: "E",
      category: categoria,
      developerCompany: desarrollador,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/v1/api/game/create",
        data
      );

      if (response.status == 200) {
        window.location.href = "/Admin";
      } else {
        // Manejar el caso de error, por ejemplo, mostrar un mensaje de error
      }
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
    }
  };
  return (
    <div className="new-game">
      <div className="title-game">
        <h2>NUEVO JUEGO</h2>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="datos-new-game">
        <div className="datos-primarios">
          <div>
            <Text color={"#9FEADD"}>Nombre</Text>
            <Input
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Categoria</Text>
            <Input
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Precio</Text>
            <Input
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              background={"#C2CEDE"}
              type="number"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            />
            {/*  <Text color={"#9FEADD"}>Clasificacion</Text>
            {/*  <Text color={"#9FEADD"}>Clasificacion</Text>
            <Input
              id="clasificacion"
              value={clasificacion}
              onChange={(e) => setClasificacion(e.target.value)}
              required
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"3rem"}
              fontWeight={"bold"}
            /> */}
            <Text color={"#9FEADD"}>Compañia desarrolladora</Text>
            <Input
              id="desarrollador"
              value={desarrollador}
              onChange={(e) => setDesarrollador(e.target.value)}
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
              
              background={"#C2CEDE"}
              type="text"
              w={"100%"}
              h={"100%"}
              fontWeight={"bold"}
            />
            <Text color={"#9FEADD"}>Agregar Video</Text>
            <Input
              id="apellido"
              
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
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            background={"#C2CEDE"}
            type="text"
            w={"100%"}
            h={"100%"}
            fontWeight={"bold"}
            marginTop={"1rem"}
          />
        </div>
        <div className="agregar">
          <Button
          type="submit"
            variant="solid"
            color={"#0D1A2C"}
            bg={"#879DBB"}
            _hover={{ bg: "#9FEADD" }}
          >
            AGREGAR JUEGO
          </Button>
        </div>
      </form>
        
    </div>
  );
};

export default NewGame;
