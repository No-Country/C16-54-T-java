import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/login' element={<Login/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    
  )
}

export default App
