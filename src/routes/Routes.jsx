import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Blogs from "../components/pages/Blogs";
import AddAToy from "../components/pages/AddAToy";
import ToyDetailsForCategory from "../components/pages/ToyDetailsForCategory";
import AllToys from "../components/pages/AllToys";
import MyToys from "../components/pages/MyToys";
import ToyDetailsForAllToys from "../components/pages/ToyDetailsForAllToys";
import UpdateToy from "../components/pages/UpdateToy";
import ErrorPage from "../components/pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "toyGalaxyCategory/:id",
        element: (
          <PrivateRoute>
            <ToyDetailsForCategory></ToyDetailsForCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-iota-brown.vercel.app/toyGalaxyCategory/${params.id}`
          ),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "https://assignment-11-server-iota-brown.vercel.app/allToysDetails"
          ),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetailsForAllToys></ToyDetailsForAllToys>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-iota-brown.vercel.app/alltoysDetails/${params.id}`
          ),
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-iota-brown.vercel.app/alltoysDetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
