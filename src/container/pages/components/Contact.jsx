import React from "react";
import "../styles/Contact.css";
import FirstContact from "./FirstContact";

const Contact = () => {
  return (
    <div className="container_con">
      <div>
        <div>
          <FirstContact />
          <h1>
            <strong>Contact</strong>
          </h1>
          <p>From prestine waters, to majestic</p>
          <p className="para1">forests -- We've got it all.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
