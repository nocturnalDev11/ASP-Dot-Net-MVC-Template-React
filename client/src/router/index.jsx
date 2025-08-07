import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';

const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route, index) => {
                    const Component = route.element;
                    return <Route key={index} path={route.path} element={<Component />} />;
                })}
            </Routes>
        </Suspense>
    );
};

export default Router;
