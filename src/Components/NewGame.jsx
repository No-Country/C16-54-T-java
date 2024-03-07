import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import "./styles.css";
import { Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const NewGame = () => {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [clasificacion, setClasificacion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [desarrollador, setDesarrollador] = useState("");
  const [image, setImage] = useState(null);
  

  const handleSubmit = async (e) => {
    console.log("presionado");

    e.preventDefault();
    
    
    
    
    try {
      const token = localStorage.getItem('token');
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
      const gameResponse= await axios.post(
        "http://localhost:8080/v1/api/admin/createGame",
        data,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            
          }
        }
      );
      // Verificar si se obtiene el ID del juego
      const gameId = gameResponse.data.id;
      console.log("ID del juego:", gameId);

      if (image) {
       const formData = new FormData();
        formData.append('file', image);
        const imageResponse = await axios.post(
        `http://localhost:8080/v1/api/admin/uploadPhoto?idGame=${gameId}`,
       formData,
      {
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
        }
      }
      );

        if (imageResponse.status == 201) {
        console.log('Juego y foto cargados exitosamente');
        window.location.href = "/Admin";
        }
      
      }else{
          console.error("Debes seleccionar una imagen para cargar.");
        }
        setNombre("");
        setDescripcion("");
        setPrecio(0);
        setClasificacion("");
        setCategoria("");
        setDesarrollador("");
        setImage(null);    
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
    }
  };
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
               id="nombre"
               value={nombre}
               onChange={(e) => setNombre(e.target.value)}
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
            <Text color={"#9FEADD"} htmlFor="imagenInput">Agregar Imagen</Text>
            <Input
              id="imagenInput"
              type="file"
              background={"#C2CEDE"}
              accept="image/*" 
              onChange={handleImageChange}
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
