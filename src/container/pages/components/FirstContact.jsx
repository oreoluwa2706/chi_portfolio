import React, { useState } from "react";
import "../styles/Contact.css";

const FirstContact = () => {
  const styling = {
    minWidth: "100vw",
    minHeight: "100vh",
  };
  return (
    <div style={styling}>
      <div className="flex">
        <strong>
          <a className="ocean" href="Home.html" target="_blank">
            Oceanica
          </a>
        </strong>
        <strong>
          <a href="Home.html" target="_blank">
            Home
          </a>
        </strong>
        <a href="Contact.jsx" target="_blank">
          Contact
        </a>
        <a href=".html" target="_blank">
          Tours
        </a>
        <a className="anch1" href="Contact.html" target="_blank">
          Start a journey
        </a>
      </div>
    </div>
  );
};

export default FirstContact;
