import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { CountersPage } from "../counters/CountersPage";
import { MainTemplate } from "../ds/templates/MainTemplate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
    ],
  },
]);
