import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsAndCart } from "./api/ProductsAndCart";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", loader: () => fetch("products.json"), element: <Shop /> },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "/order-review",
          loader: ProductsAndCart,
          element: <OrderReview />,
        },
        { path: "/manage-inventory", element: <Inventory></Inventory> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
