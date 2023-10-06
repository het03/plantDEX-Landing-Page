import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomNavbar from "./Components/Navbar/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomNavbar />
    <App />
  </React.StrictMode>
);
