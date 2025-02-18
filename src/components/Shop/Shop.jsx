import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import styles from "./Shop.module.css";

function Shop() {
  //could generate random number 1-20

  return (
    <>
      <nav>
        <div>Shop</div>
        <div>
          <div>Number of items</div>
          <button>Go to cart / checkout</button>
        </div>
      </nav>
      <h1>Items...</h1>
      <div className={styles.cardContainer}>
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
        <Card id={6} />
        <Card id={7} />
        <Card id={8} />
        <Card id={9} />
        <Card id={10} />
        <Card id={11} />
        <Card id={12} />
        <Card id={13} />
        <Card id={14} />
        <Card id={15} />
        <Card id={16} />
      </div>
      <Link className={styles.home} to={"/"}>
        Back to home
      </Link>
    </>
  );
}

export { Shop };
