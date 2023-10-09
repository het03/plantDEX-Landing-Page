import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <div className="result">
      <p>Your message has been successfully sent.</p>
    </div>
  );
};

function Contact() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f355e9t",
        "template_3acfra2",
        form.current,
        "1CGU-NGnLaFU5Al_d"
      )
      .then(
        (result) => {
          console.log(result.text);
          showResult(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="fullName"
          required
          placeholder="Your Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your Email"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          required
          placeholder="Your Phone Number"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message"
        ></textarea>

        <button type="submit">Send</button>
        {result && <Result />}
      </form>

      <footer>
        <p>&copy; 2023 PlantDEX Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
