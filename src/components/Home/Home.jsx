import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Online Shopping Site</div>
      <img src="" alt="Image" />
      <Link to={"shop"}>Shop Here!</Link>
    </>
  );
}

export { Home };
