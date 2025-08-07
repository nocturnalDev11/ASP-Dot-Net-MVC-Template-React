import { lazy } from 'react';

export const routes = [
    {
        path: '/',
        name: 'Landing page',
        element: lazy(() => import('../pages/Landing')),
        showInNav: true,
    },
    {
        path: '/login',
        name: 'Login',
        element: lazy(() => import('../pages/Login')),
        showInNav: false,
    },
    {
        path: '/home-page',
        name: 'Home page',
        element: lazy(() => import('../pages/Home')),
        showInNav: true,
    },
];
