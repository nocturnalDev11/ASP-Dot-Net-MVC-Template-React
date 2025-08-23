import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { token } = useAuthStore();
    if (!token) return <Navigate to="/login" replace />;
    return <>{children}</>;
}
