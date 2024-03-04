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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/About-us' element={<AboutUs/>}/>
        <Route exact path='/All-the-games' element={<AllGames/>}/>
      </Routes>
      <Footer/>
      {/* <Card/> */}
    </BrowserRouter>
      
    
  )
}

export default App
