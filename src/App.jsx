import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import MainLayout from "./layouts/MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
