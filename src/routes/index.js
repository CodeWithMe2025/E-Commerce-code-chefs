import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "@/Layouts";
import { AuthRoutes } from "@/routes/auth";
import { EcommerceRoutes } from "@/routes/EcommerceRoutes ";

const NotFound = lazy(() => import("@/pages/not-found"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      EcommerceRoutes,
      AuthRoutes,
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
