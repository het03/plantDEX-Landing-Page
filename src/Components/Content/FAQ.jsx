import "./FAQ.css";

function FAQ() {
  return (
    <div className="Ftextblock">
      <div className="Fcontainer">
        <div className="Ftitle">FAQ</div>
        <div className="Fcontent">
          <h1 className="question">
            Q: How accurate is PlantDEX in identifying plant diseases?
          </h1>
          <p className="answer">
            A: PlantDEX utilizes advanced AI algorithms for disease
            identification, offering a high level of accuracy. However, it's
            essential to consult with a local agricultural expert for precise
            diagnosis and treatment.
          </p>
          <h1 className="question">
            Q: Can I trust the app's recommended treatment options?
          </h1>
          <p className="answer">
            A: PlantDEX provides general recommendations based on detected
            diseases. For specific and safe treatment, consulting a local
            agricultural specialist is recommended to ensure appropriate
            actions.
          </p>
          <h1 className="question">
            Q: Is my data and uploaded images secure and private?
          </h1>{" "}
          <p className="answer">
            A: Yes, we prioritize user privacy and data security. Your uploaded
            images and data are handled with utmost confidentiality and are not
            shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
