import React from "react";
import "./About.css";
import Pic1 from "../../assets/Image.png";

function About() {
  return (
    <div className="container">
      <div className="textblock">
        <div className="textblock-container-a">
          <h1 className="textblock-title-a">ABOUT US</h1>
          <p className="textblock-content-a">
            <strong>PlantDEX</strong>, conceived during the Smart India
            Hackathon (SIH) by a dedicated team of six innovative minds,
            revolutionizes agriculture. With a vision to empower farmers by
            swiftly identifying plant diseases and recommending precise
            treatments, our goal is to enhance agricultural productivity
            seamlessly. During the intense SIH event, we balanced academics and
            hackathon demands, meticulously researching and coding with guidance
            from mentors. PlantDEX emerged as a testament to our determination
            and collaboration. Today, PlantDEX is more than an SIH project; a
            product of our relentless efforts. Join us in this journey to
            empower farmers and create a sustainable future, where technology
            and agriculture coalesce to benefit every farmer and our nation.
          </p>
        </div>
        <div className="textblock-container-b">
          <h1 className="textblock-title-b">OUR MISSION</h1>
          <p className="textblock-content-b">
            At PlantDEX, we are driven by a singular motive: to support farmers
            in safeguarding their crops and ensuring bountiful harvests. By
            providing a user-friendly platform for disease identification and
            treatment recommendations, we aim to enhance agricultural
            productivity and contribute to global food security. Our mission is
            rooted in a deep understanding of the vital role agriculture plays
            in sustaining communities and economies. We believe that by
            utilizing technology and innovation, we can revolutionize the
            farming experience, making it more accessible, efficient, and
            environmentally sustainable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
