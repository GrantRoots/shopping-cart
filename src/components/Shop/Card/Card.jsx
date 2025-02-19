import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useOutletContext } from "react-router-dom";

function Card({ id, onClick }) {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [total, setTotal] = useState(0);
  const { cartTotal, setCartTotal } = useOutletContext();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setName(response.title);
        setPrice(response.price);
        setImageURL(response.image);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleChange(e) {
    setTotal(e.target.value);
  }

  function handleClick(e) {
    e.target.id === "1" ? setTotal(total + 1) : setTotal(total - 1);
  }

  function handleAddToCart() {
    total < 0 ? null : setCartTotal(cartTotal + total);
  }

  return (
    <div className={styles.container}>
      <div>
        <h4>{name}</h4>
        <div>PRICE: ${price}</div>
      </div>
      <img src={imageURL} alt="Image" />
      <div className={styles.inputs}>
        <div>
          <input
            onChange={handleChange}
            type="number"
            defaultValue="0"
            value={total}
            min={0}
          />
          <button id="1" onClick={handleClick}>
            +1
          </button>
          <button id="0" onClick={handleClick}>
            -1
          </button>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export { Card };
