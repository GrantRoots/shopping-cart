import App from "./App";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "Home", element: <Home /> },
      { path: "Shop", element: <Shop /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
