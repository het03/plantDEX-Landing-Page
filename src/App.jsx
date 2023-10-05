import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import TextBlock from "./TextBlock";

function App() {
  return (
    <>
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.65}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="animation_layer parallax" id="clouds"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="sun"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="animation_layer parallax" id="top">
            <div className="title">
              Plant<span className="highlight">DEX</span>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="backfield"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="animation_layer parallax" id="farmer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="animation_layer parallax" id="frontfield"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="animation_layer parallax" id="corn"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
