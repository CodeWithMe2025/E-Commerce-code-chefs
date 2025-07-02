import { createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import RootLayout from "./RootLayout";
import { Route } from "react-router-dom"
import { useState } from "react";
import SignInPage from "@/Pages/SignInPage";

export const Router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<RootLayout />}>
            <Route path="/login" element={<SignInPage/>}/>
            <Route path="*" element={<h1>404</h1>} />
        </Route>
    )
)



