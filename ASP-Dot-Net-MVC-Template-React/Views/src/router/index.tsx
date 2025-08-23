import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "../router/routes";
import Loader from "../components/ui/Loader";
import ProtectedRoute from "./protected-route";

const Router = () => {
    return (
        <Suspense
            fallback={
                <div>
                    <Loader />
                </div>
            }
        >
            <Routes>
                {routes.map((route, index) => {
                    const Component = route.element;

                    const element = route.protected ? (
                        <ProtectedRoute>
                            <Component />
                        </ProtectedRoute>
                    ) : (
                        <Component />
                    );

                    return <Route key={index} path={route.path} element={element} />;
                })}
            </Routes>
        </Suspense>
    );
};

export default Router;
