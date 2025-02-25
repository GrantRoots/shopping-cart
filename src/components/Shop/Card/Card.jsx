import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

function useFetchProduct(id) {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setName(response.title);
        setPrice(response.price);
        setImageURL(response.image);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { name, price, imageURL, loading, error };
}

function Card({ id }) {
  const [total, setTotal] = useState(null);
  const { cartTotal, setCartTotal } = useOutletContext();

  const { name, price, imageURL, loading, error } = useFetchProduct(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  function handleChange(e) {
    setTotal(Number(e.target.value));
  }

  function handleClick(e) {
    e.target.id === "+1" ? setTotal(total + 1) : setTotal(total - 1);
  }

  function handleAddToCart() {
    total < 0 ? null : setCartTotal(cartTotal + total);
  }

  return (
    <div className={styles.container} data-testid={`card-${id}`}>
      <div>
        <h4>{name}</h4>
        <div>PRICE: ${price}</div>
      </div>
      <img src={imageURL} alt="Image" className={styles.img} />
      <div className={styles.inputs}>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="0"
            value={total}
          />
          <button id="+1" onClick={handleClick}>
            +1
          </button>
          <button id="-1" onClick={handleClick}>
            -1
          </button>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
};

export { Card, useFetchProduct };
