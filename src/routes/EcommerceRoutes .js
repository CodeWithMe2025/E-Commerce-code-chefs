import { lazy } from "react";

const Home = lazy(() => import("@/pages/index"));
const DefaultLayout = lazy(() => import("@/Layouts/Ecommerc"));

export const EcommerceRoutes = {
  path: "",
  Component: DefaultLayout,
  children: [
    {
      path: "",
      index: true,
      Component: Home,
    },
  ],
};
