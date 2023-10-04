import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Parallax pages={1} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax" id="back"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax" id="mid"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax" id="front"></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
