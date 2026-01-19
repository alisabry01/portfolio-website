import { createBrowserRouter } from "react-router";
import { HomeLayout } from "@/layouts";
import { Error, NotFound, Home, Projects, Contact } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
