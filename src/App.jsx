import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("Shop");
  const [cartTotal, setCartTotal] = useState(0);

  function changeRoute() {
    route === "Home" ? setRoute("Shop") : setRoute("Home");
  }

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
