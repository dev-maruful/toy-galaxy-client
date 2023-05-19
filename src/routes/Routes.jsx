import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Blogs from "../components/pages/Blogs";
import AddAToy from "../components/pages/AddAToy";
import ToyDetails from "../components/pages/ToyDetails";
import AllToys from "../components/pages/AllToys";
import MyToys from "../components/pages/MyToys";

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
        path: "addatoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "toyGalaxyCategory/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toyGalaxyCategory/${params.id}`),
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToysDetails"),
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
