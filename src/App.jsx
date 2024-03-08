import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import AboutUs from "./Components/AboutUs";
import AllGames from "./Components/AllGames";
import Cart from "./Components/Cart";
import Card from "./Components/Card";
import Library from "./Components/Library";
import Admin from "./Components/Admin";
import NewGame from "./Components/NewGame";
import { useState } from "react";
// import { useEffect, useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (game) => {
    setCart([...cart, game]);
  };
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/game/list`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`Error!! ${response.status}: ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setGames(data))
  //     .catch((error) =>
  //       console.error("Error al obtener la lista de juegos: ", error)
  //     );
  // }, []);
  return (
      <BrowserRouter>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route exact path="/" element={<Hero addToCart={addToCart}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart cart={cart}/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/About-us" element={<AboutUs />} />
        <Route exact path="/All-the-games" element={<AllGames addToCart={addToCart} searchTerm={searchTerm}/>} />
        <Route exact path="/Card" element={<Card />} />
        <Route exact path="/Card/:id" element={<Card />} />
        <Route exact path="/Library" element={<Library searchTerm={searchTerm} />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Admin/Agregar-juego" element={<NewGame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
};

export default App;
