import "./App.css";

function FAQ() {
  return (
    <div className="f-container">
      <div className="f-title">FAQ</div>
      <div className="f-content">
        <h1>Q: How accurate is PlantDEX in identifying plant diseases?</h1>
        <h2>
          A: PlantDEX utilizes advanced AI algorithms for disease
          identification, offering a high level of accuracy. However, it's
          essential to consult with a local agricultural expert for precise
          diagnosis and treatment.
        </h2>
        <h1>Q: Can I trust the app's recommended treatment options?</h1>
        <h2>
          A: PlantDEX provides general recommendations based on detected
          diseases. For specific and safe treatment, consulting a local
          agricultural specialist is recommended to ensure appropriate actions.
        </h2>
        <h1>Q: Is my data and uploaded images secure and private?</h1>{" "}
        <h2>
          A: Yes, we prioritize user privacy and data security. Your uploaded
          images and data are handled with utmost confidentiality and are not
          shared with third parties.
        </h2>
      </div>
    </div>
  );
}

export default FAQ;
