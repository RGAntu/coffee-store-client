import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../pages/AddCoffee";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
    ],
  },
]);

export default router;
