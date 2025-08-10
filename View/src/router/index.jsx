import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import Loader from '../components/ui/Loader';

const Router = () => {
    return (
        <Suspense fallback={
            <div>
                <Loader />
            </div>
        }>
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
