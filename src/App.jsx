import { Footer, Navbar } from "./components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Root,
  Home,
  Contact,
  About,
  Industries,
  Careers,
  Solution,
  Partners,
} from "./routes";

import ErrorPage from "./routes/error/error-page";
import Resources from "./routes/resources/resources.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
