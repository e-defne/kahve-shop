import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small> TL</small>
            <strong>{price}</strong>
          </p>
  
        </div>

        <img src={image} alt={title} />
        <button onClick={addToBasket}>Sepete Ekle</button>
      </div>
    </div>
  );
}

export default Product;