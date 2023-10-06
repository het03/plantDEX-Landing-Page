import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import About from "./Components/Content/About";
import Working from "./Components/Content/Working";
import FAQ from "./Components/Content/FAQ";
import placeholder from "./assets/placeholder.svg";

function App() {
  return (
    <>
      <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="clouds"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="top">
            <img src={placeholder} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="backfield"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="farmer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="frontfield"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="corn"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <Working />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <FAQ />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
