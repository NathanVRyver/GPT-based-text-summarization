import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  return(
    <div id="contact">
      <div className="contact__headline">
        <h1 className="gradient__text">Contact Us</h1>
      </div>
      <form className="contact-form" action="https://submit-form.com/bKPsjBhxm">
        <label>Full Name:</label>
        <input
          className="contactInput"
          name="fullname"
          type="text"
          required
        />
        <label>Work Email:</label>
        <input
          className="contactInput"
          name="email"
          type="email"
          required
        />
        <label>Message:</label>
        <input
          className="contact-subjectInput"
          name="message"
          type="text"
        />
        <input className="submitInput" name="submit" type="submit" required />
        <p className="disclaimer__contact">
          *We will do our best to get back to you. Keep in mind usual response
          times are between 24-48 hours.
        </p>
      </form>
    </div>
  );
};

export default Contact;
