import { lazy } from "react";

const AuthLayout = lazy(() => import("@/Layouts/Auth"));
const Login = lazy(() => import("@/pages/login"));
const SignUp = lazy(() => import("@/pages/sign-up"));

export const AuthRoutes = {
  path: "",
  Component: AuthLayout,
  children: [
    { path: "login", Component: Login },
    { path: "signup", Component: SignUp },
  ],
};
