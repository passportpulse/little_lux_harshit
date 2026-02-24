import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../app/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: (
        <>
          <ScrollToTop /> 
          <MainLayout />
        </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
    ],
  },
]);