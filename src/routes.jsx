import App from "./App";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
