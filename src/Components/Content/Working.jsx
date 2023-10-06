import "./Working.css";

function Working() {
  return (
    <div className="Wtextblock">
      <div className="Wcontainer">
        <div className="Wtitle">HOW IT WORKS</div>
        <div className="Wcontent">
          <ol>
            <li className="Steps">
              Open the PlantDEX app on your mobile device and tap the prominent
              'Cam' button.
            </li>
            <li className="Steps">
              Tap the 'Upload' button to select and upload an image of the plant
              or crop from your device's files. Alternatively, tap the 'Select
              from camera' button to use your device's camera and take a photo
              of the affected area.
            </li>
            <li className="Steps">
              If using the camera, position your device to capture a clear image
              of the affected area of the plant. Ensure the area is well-framed
              within the camera view.
            </li>
            <li className="Steps">
              After capturing or uploading the image, tap the 'Continue' button
              to initiate the analysis using our advanced AI algorithms. The app
              will swiftly identify any potential diseases or issues.
            </li>
            <li className="Steps">
              Review the results, including the detected disease, its severity,
              and recommended treatment options. Detailed information about the
              disease is also provided.
            </li>
            <li className="Steps">
              Based on the app's recommendations, take appropriate measures to
              treat the plant and mitigate the disease. The app offers guidance
              and tips to help you effectively manage the situation.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Working;
