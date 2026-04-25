import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import Home from "../pages/Home";
import ViewDetails from "../pages/ViewDetails";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "details/:id",
        loader: ({params}) => 
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: ViewDetails,
      }, 
    {
      path: "update/:id",
      loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
      Component: UpdateCoffee,
    }

    ],
  },
]);

export default router;
