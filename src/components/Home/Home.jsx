import styles from "./Home.module.css";
import natureImg from "../../assets/nature.jpg";

function Home() {
  return (
    <div data-testid={"home"} className={styles.container}>
      <h1 className={styles.h1}>Home</h1>
      <p className={styles.p}>
        Hello, this is the homepage for my shop. We are a general store and sell
        all types of things. Click the link in the top left to view our items.
        Thanks for visiting!
      </p>
      <img src={natureImg} alt="Nature" className={styles.img} />
    </div>
  );
}

export { Home };
