import React from "react";
import { Link } from "react-router-dom";

function Orders() {
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
          Orders
        </li>
      </ol>
    </nav>
  );
}
export default Orders;
