import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import styles from "./Shop.module.css";
import { useState } from "react";

function Shop() {
  const [total, setTotal] = useState(0);

  function addToCart(amount) {
    amount < 0 ? null : setTotal(total + amount);
  }

  return (
    <>
      <nav>
        <h3>Shop</h3>
        <div>
          <div>Number of items: {total}</div>
          <button>Go to cart / checkout</button>
        </div>
      </nav>
      <h1>Items...</h1>
      <div className={styles.cardContainer}>
        <Card onClick={(amount) => addToCart(amount)} id={1} />
        <Card onClick={(amount) => addToCart(amount)} id={2} />
        <Card onClick={(amount) => addToCart(amount)} id={3} />
        <Card onClick={(amount) => addToCart(amount)} id={4} />
        <Card onClick={(amount) => addToCart(amount)} id={5} />
        <Card onClick={(amount) => addToCart(amount)} id={6} />
        <Card onClick={(amount) => addToCart(amount)} id={7} />
        <Card onClick={(amount) => addToCart(amount)} id={8} />
        <Card onClick={(amount) => addToCart(amount)} id={9} />
        <Card onClick={(amount) => addToCart(amount)} id={10} />
        <Card onClick={(amount) => addToCart(amount)} id={11} />
        <Card onClick={(amount) => addToCart(amount)} id={12} />
        <Card onClick={(amount) => addToCart(amount)} id={13} />
        <Card onClick={(amount) => addToCart(amount)} id={14} />
        <Card onClick={(amount) => addToCart(amount)} id={15} />
        <Card onClick={(amount) => addToCart(amount)} id={16} />
      </div>
      <Link className={styles.home} to={"/"}>
        Back to home
      </Link>
    </>
  );
}

export { Shop };
