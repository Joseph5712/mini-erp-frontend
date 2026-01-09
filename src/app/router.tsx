import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import CustomersPage from "../features/customers/CustomersPage";
import ProductsPage from "../features/products/ProductsPage";
import OrdersPage from "../features/orders/OrdersPage";
import ReportsPage from "../features/reports/ReportsPage";
import Protected from "./Protected";
import AdminOnly from "./AdminOnly";

export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },

    {
        path: "/",
        element: (
            <Protected>
                <DashboardPage />
            </Protected>
        ),
    },
    {
        path: "/customers",
        element: (
            <Protected>
                <CustomersPage />
            </Protected>
        ),
    },
    {
        path: "/products",
        element: (
            <Protected>
                <ProductsPage />
            </Protected>
        ),
    },
    {
        path: "/orders",
        element: (
            <Protected>
                <OrdersPage />
            </Protected>
        ),
    },
    {
        path: "/reports",
        element: (
            <AdminOnly>
                <ReportsPage />
            </AdminOnly>
        ),
    },
]);
