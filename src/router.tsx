import { createBrowserRouter } from "react-router";
import { HomeLayout } from "@/layouts";
import { Error, NotFound, Home } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
