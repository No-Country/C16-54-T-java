import "./styles.css";
import logo from "../assets/img/logob.png";

const AboutUs = () => {
  return (
    <div className="about">

      <div className="img-container">
        {/* <img src="./ccc.jpg"></img> */}
        <div className="aboutUs">
        <div className="image-logo"><img src={logo} /></div>
        
          <h2>Sobre Nosotros</h2>
          <p>
            En Gamestopia, nos enorgullece ser tu destino confiable y seguro
            para todas tus necesidades de videojuegos. Con un compromiso
            inquebrantable con la excelencia y la satisfacción del cliente, nos
            esforzamos por ofrecerte la mejor experiencia de compra en línea,
            respaldada por nuestra dedicación a la transparencia, la confianza y
            la integridad.
          </p>
        </div>
      </div>

      <div className="section-about">
        <div className="contenedor-mision">
        <div className="mision">
          <h2>MISIÓN</h2>
          <p>
            Nuestra misión es simple pero poderosa: proporcionarte acceso a una
            amplia selección de videojuegos, accesorios y experiencias, todo en
            un entorno seguro y confiable. Nos esforzamos por ser tu compañero
            de confianza en tu viaje de juego, proporcionándote productos de
            alta calidad y un servicio excepcional en cada paso del camino.
          </p>
        </div>
        </div>
     
        <div className="confianza">
          <h2>CONFIANZA Y TRANSPARENCIA</h2>
          <p>
            Creemos en la transparencia absoluta en cada interacción con
            nuestros clientes. Desde la navegación por nuestro sitio web hasta
            el proceso de compra y entrega, nos comprometemos a brindarte una
            experiencia clara y sin sorpresas desagradables. Tu confianza es
            nuestra prioridad número uno, y trabajamos arduamente para
            ganárnosla en cada transacción.
          </p>
        </div>
        <div className="contenedor-mision">
        <div className="seguridad">
          <h2>SEGURIDAD</h2>
          <p>
            Entendemos la importancia de la seguridad en línea al realizar
            compras. Por eso, hemos implementado medidas de seguridad robustas
            para proteger tus datos personales y financieros en todo momento.
            Puedes confiar en que tu información está segura con nosotros y que
            cada compra que realices en nuestra plataforma es segura y
            protegida. Nos enorgullecemos de nuestro equipo de atención al
            cliente altamente capacitado y dedicado. Estamos aquí para ayudarte
            en cada paso del proceso, desde responder preguntas sobre productos
            hasta resolver problemas con tus pedidos. Tu satisfacción es nuestra
            máxima prioridad, y haremos todo lo posible para garantizar que tu
            experiencia con Gamestopia sea excepcional en todo momento.
          </p>
        </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;