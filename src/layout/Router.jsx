import { createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import RootLayout from "./RootLayout";
import { Route } from "react-router-dom"
import SignInPage from "@/Pages/SignInPage";
import Home from "@/Pages/Home";

export const Router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Route>
    )
)



