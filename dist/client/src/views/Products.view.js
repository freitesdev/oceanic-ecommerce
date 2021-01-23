import React from "react";
import { Link } from "react-router-dom";
import Product from '../components/Product.component';

function Products() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-3">
          <Link to="/" className="breadcrumb-item">
            Home
          </Link>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      <Product />
    </div>
  );
}
export default Products;
