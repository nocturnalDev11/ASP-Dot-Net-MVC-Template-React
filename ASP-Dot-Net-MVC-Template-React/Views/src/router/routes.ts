import { lazy } from "react";
import type { LazyExoticComponent, ComponentType } from "react";

export interface AppRoute {
    path: string;
    name: string;
    element: LazyExoticComponent<ComponentType<object>>;
    showInNav: boolean;
    protected?: boolean;
}

export const routes: AppRoute[] = [
    {
        path: "/",
        name: "Landing page",
        element: lazy(() => import("../pages/LandingPage")),
        showInNav: true,
    },
    {
        path: "/register",
        name: "Register",
        element: lazy(() => import("../pages/auth/UserRegister")),
        showInNav: false,
    },
    {
        path: "/login",
        name: "Login",
        element: lazy(() => import("../pages/auth/UserLogin")),
        showInNav: false,
    },
    {
        path: "/home-page",
        name: "Home page",
        element: lazy(() => import("../pages/Home")),
        showInNav: true,
        protected: true,
    },
    {
        path: "/all-items",
        name: "Items",
        element: lazy(() => import("../pages/Items/Index")),
        showInNav: true,
        protected: true,
    },
];
