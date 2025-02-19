import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("Home");
  const [cartTotal, setCartTotal] = useState(0);

  function changeRoute() {
    route === "Home" ? setRoute("Shop") : setRoute("Home");
  }

  // function addToCart(amount) {
  //   amount < 0 ? null : setTotal(total + amount);
  // }

  return (
    <>
      <nav>
        <Link to={route} onClick={changeRoute}>
          To {route}
        </Link>
        <div>
          <div>Total in cart: {cartTotal}</div>
          <button>Go to cart / checkout</button>
        </div>
      </nav>
      <Outlet context={{ cartTotal, setCartTotal }} />
    </>
  );
}

export default App;
