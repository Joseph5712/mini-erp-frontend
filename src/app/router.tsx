import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import DashboardPage from "../features/auth/DashboardPage";

export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/", element: <DashboardPage /> },
]);
