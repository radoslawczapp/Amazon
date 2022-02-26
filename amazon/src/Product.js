import React from "react";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://ecsmedia.pl/c/no-rules-rules-w-iext97382645.jpg"
        alt="Photo"
      />
      <button>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

export default Product;
