import { Navigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

export default function Protected({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();

    if (loading) return <div className="p-6 text-muted-foreground">Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;

    return <>{children}</>;
}
