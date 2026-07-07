import { createBrowserRouter, Navigate } from "react-router";
import { AppLayout } from "./views/layouts/AppLayout";
import { Main } from "./views/pages/main";
import { AboutUs } from "./views/pages/AboutUs";
import { Programs } from "./views/pages/Programs";
import { News } from "./views/pages/News";
import { Contact } from "./views/pages/Contact";
import { Course } from "./views/pages/Course";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
  {
    path: "/quienes-somos",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/programas",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Programs />,
      },
    ],
  },
  {
    path: "/novedades",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <News />,
      },
    ],
  },
  {
    path: "/contacto",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
    ],
  },
  {
    path: "/curso/:slug",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Course/>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
