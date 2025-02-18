import { useState, useEffect } from "react";
import styles from "./Card.module.css";

function Card({ id }) {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [total, setTotal] = useState(0);

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

  function handleChange() {
    //change state
  }

  function handleClick() {
    //add or subtract items
  }

  return (
    <div className={styles.container}>
      <div>
        <div>TITLE: {name}</div>
        <div>PRICE: {price}</div>
      </div>
      <img src={imageURL} alt="Image" />
      <div className={styles.inputs}>
        <div>
          <input onChange={null} type="number" min={0} value={total} />
          <button onClick={handleClick}>+1</button>
          <button onClick={handleClick}>-1</button>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export { Card };
