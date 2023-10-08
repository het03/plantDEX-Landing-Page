import React, { useState, useRef } from "react"; // Import useRef
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import About from "./Components/Content/About";
import Working from "./Components/Content/Working";
import FAQ from "./Components/Content/FAQ";
import placeholder from "./assets/placeholder.svg";
import CustomNavbar from "./Components/Navbar/Navbar";

function App() {
  const parallaxRef = useRef(null); // Use useRef to create a ref
  const [currentPage, setCurrentPage] = useState(0);

  const scrollPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    parallaxRef.current.scrollTo(pageNumber);
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <CustomNavbar
        currentPage={currentPage}
        scrollPage={scrollPage}
        toggleOverlay={toggleOverlay}
      />
      <Parallax
        pages={4}
        style={{ top: "0", left: "0" }}
        className="animation"
        ref={parallaxRef} // Attach the ref to Parallax
      >
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
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="top">
            <img src={placeholder} alt="Placeholder" />
          </div>
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
