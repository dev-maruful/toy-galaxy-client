import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../components/layouts/Root";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
