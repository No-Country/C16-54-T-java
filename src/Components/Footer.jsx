import { Button } from "@chakra-ui/button";
import "./footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <Button bg={"none"} _hover={"none"}>
          <CiFacebook color="#9FEADD" fontSize={"1.5rem"} />
        </Button>
        <Button bg={"none"} _hover={"none"}>
          <FaInstagram color="#9FEADD" fontSize={"1.5rem"}/>
        </Button>
        <Button bg={"none"} _hover={"none"}>
          <FaWhatsapp color="#9FEADD" fontSize={"1.5rem"} />
        </Button>
        <Button bg={"none"} _hover={"none"}>
          <SiGmail color="#9FEADD" fontSize={"1.5rem"} />
        </Button>
      </div>
      <div className="copyright">© GAMESTOPIA 2024. Todos los derechos reservados.</div>
    </div>
  );
};

export default Footer;
