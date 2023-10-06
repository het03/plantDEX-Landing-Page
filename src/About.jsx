import "./App.css";

function About() {
  return (
    <div className="textblock">
      <div className="textblock-container-a">
        <h1 className="textblock-title-a">ABOUT US</h1>
        <p className="textblock-content-a">
          PlantDEX is a revolutionary mobile application designed to empower
          farmers and agricultural enthusiasts. Our app leverages cutting-edge
          technology to assist in the quick and accurate identification of plant
          diseases, making crop management more efficient and effective.
        </p>
      </div>
      <div className="textblock-container-b">
        <h1 className="textblock-title-b">OUR MISSION</h1>
        <p className="textblock-content-b">
          At PlantDEX, we are driven by a singular motive: to support farmers in
          safeguarding their crops and ensuring bountiful harvests. By providing
          a user-friendly platform for disease identification and treatment
          recommendations, we aim to enhance agricultural productivity and
          contribute to global food security.
          <br />
          <br />
          Our mission is rooted in a deep understanding of the vital role
          agriculture plays in sustaining communities and economies. We believe
          that by utilizing technology and innovation, we can revolutionize the
          farming experience, making it more accessible, efficient, and
          environmentally sustainable.
        </p>
      </div>
    </div>
  );
}

export default About;
