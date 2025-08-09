import { lazy } from 'react';

export const routes = [
    {
        path: '/',
        name: 'Landing page',
        element: lazy(() => import('../pages/LandingPage.jsx')),
        showInNav: true,
    },
    {
        path: '/register',
        name: 'Register',
        element: lazy(() => import('../pages/Auth/UserRegister.jsx')),
        showInNav: false,
    },
    {
        path: '/login',
        name: 'Login',
        element: lazy(() => import('../pages/Auth/UserLogin.jsx')),
        showInNav: false,
    },
    {
        path: '/home-page',
        name: 'Home page',
        element: lazy(() => import('../pages/Home.jsx')),
        showInNav: true,
    },
];
