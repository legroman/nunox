import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Course from "./components/Course-section";
import Features from "./components/Features-section";
import Resources from "./components/Resources-section";
import Clients from "./components/Clients-section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Menu/>
        <Hero/>
        <Course/>
        <Features/>
        <Resources/>
        <Clients/>
        <Footer/>
    </div>
  );
}

export default App;
