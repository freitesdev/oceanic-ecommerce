import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mt-3">
        <Link to="/" className="breadcrumb-item">
          Home
        </Link>
        <li className="breadcrumb-item active" aria-current="page">
          Contact
        </li>
      </ol>
    </nav>
  );
}
export default Contact;
