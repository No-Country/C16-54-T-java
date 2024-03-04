import "./styles.css";
import logojuego from "../assets/img/logo-the.png";
import juego from "../assets/img/cccccc.jpg";
import { Button } from "@chakra-ui/button";

const Card = () => {
  return (
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
  );
};

export default Card;
