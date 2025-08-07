import { lazy } from 'react';

export const routes = [
    {
        path: '/',
        name: 'Landing page',
        element: lazy(() => import('../pages/Landing')),
    },
    {
        path: '/home-page',
        name: 'Home page',
        element: lazy(() => import('../pages/Home')),
    },
];
