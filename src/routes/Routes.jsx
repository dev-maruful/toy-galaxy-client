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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <ToyDetailsForCategory></ToyDetailsForCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toyGalaxyCategory/${params.id}`),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToysDetails"),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "toyDetails/:id",
        element: <ToyDetailsForAllToys></ToyDetailsForAllToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoysDetails/${params.id}`),
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoysDetails/${params.id}`),
      },
    ],
  },
]);

export default router;
