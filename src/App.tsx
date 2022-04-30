import React from "react";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";
import Interests from "./components/interests/Interests";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <div className="cardWrapper">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
