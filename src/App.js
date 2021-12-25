import './App.css';
import React from "react"
import NavBar from "./NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Products from "./pages/Products"
import ContactUS from "./pages/ContactUs"
import SignUp from "./pages/SignUp"
import Marketing from "./pages/Marketing"
import Consulting from "./pages/Consulting"

function App() {
  return (
   <Router>
     <NavBar />
        <Routes >
           <Route path = "/home" exact component = {Home}/>
           <Route path = "/services" exact component = {Services}/>
           <Route path = "/products" exact component = {Products}/>
           <Route path = "/contact-us" exact component = {ContactUS}/>
           <Route path = "/sign-up" exact component = {SignUp}/>
           <Route path = "/marketing" exact component = {Marketing}/>
           <Route path = "/consulting" exact component = {Consulting}/>    
        </Routes>      
   </Router>
  );
}

export default App;
