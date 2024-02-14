import { useEffect, useRef, useState } from "react";
import { data } from "../assets/data";
import logoblanco from "../assets/img/logoblanco.svg";

const Hero = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  return (
    <div className="hero">
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={() => scrollToImage("next")}>
            &#10093;
          </div>
          <div className="text-container">
            <div className="img-hero">
              <img src={logoblanco} />
            </div>
            <div className="title">
              <h3>Bienvenido a GamesTopia</h3>
            </div>
            <div className="text">
              <p>
                el paraíso definitivo para los entusiastas de los videojuegos.
                En nuestra plataforma, te sumergirás en un mundo vibrante y
                emocionante donde encontrarás una amplia selección de juegos y
                experiencias de entretenimiento digital.
              </p>
            </div>
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <img className="hero-img" src={item.imgUrl} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
