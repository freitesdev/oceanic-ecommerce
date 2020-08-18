import React from 'react'
import { Link } from "react-router-dom";

function Account() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-3">
          <Link to="/" className="breadcrumb-item">
            Home
          </Link>
          <li className="breadcrumb-item" aria-current="page">
            Account
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Info
          </li>
        </ol>
      </nav>
    );
}
export default Account