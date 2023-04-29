import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating" key={id}>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <img className="product__image" src={image} alt="imageProduct" />
        <div>
          <button className="product__button">Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
