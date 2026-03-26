import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import FAQ from "../pages/faq/FAQ";
import Blog from "../pages/blog/Blog";
import Products from "../pages/products/Products";
import ProductDetail from "../pages/products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "frequently-asked-questions",
        element: <FAQ />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;