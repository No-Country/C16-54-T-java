import "./styles.css";
import logojuego from "../assets/img/logo-the.png";
import juego from "../assets/img/cccccc.jpg";
import { Button } from "@chakra-ui/button";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="card-container">
          <h2>The last of us</h2>
          <img src={juego}></img>
        </div>
        <div className="container-store">
          <img src={logojuego}></img>
          <div className="store">
            <h3>59,99 US$</h3>
            <Button
              w={"180px"}
              variant="solid"
              color={"#0D1A2C"}
              bg={"#879DBB"}
              _hover={{ bg: "#9FEADD" }}
            >
              Comprar
            </Button>
            <Button
              w={"180px"}
              variant="solid"
              color={"#0D1A2C"}
              bg={"#879DBB"}
              _hover={{ bg: "#9FEADD" }}
            >
              Agregar a lista de deseos
            </Button>
          </div>
        </div>
      </div>
      <div className="requirements-container">
        <div className="description">
          <h3>DESCRIPCIÓN</h3>
          <p>
            The Last of Us es un videojuego de altísima calidad gráfica, en
            donde el terror, la acción y la aventura sostienen la historia de
            dos personajes tratando de sobrevivir en vmundo post apocalíptico.
          </p>
        </div>
        <div className="requirements">
          <h3>REQUISITOS DEL SISTEMA</h3>
          <p>
            MÍNIMO: SO: Win10/win11 Procesador: Inter Core i7-7700 or AMD FX8320
            Memoria: 8GB de RAM Gráficos: NVIDIA GTX 960 or AMD Radeon R9 280
            DirectX: Versión 12 Almacenamiento: 4 GB de espacio disponible
          </p>
          <p>
            RECOMENDADO: SO: Win10/win11 Procesador: Inter Core i7-7700 or AMD
            FX8320 Memoria: 16GB de RAM Gráficos: NVIDIA GTX 1060 6GB
            Almacenamiento: 4 GB de espacio disponible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
