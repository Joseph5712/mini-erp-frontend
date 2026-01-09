import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../../store/AuthContext";
import { cn } from "../../lib/utils";

const linkBase =
    "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors";

function Item({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    linkBase,
                    isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
}

export default function Sidebar() {
    const { isAdmin } = useAuth();

    return (
        <motion.aside
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
            className="w-64 border-r bg-background p-4 hidden md:block"
        >
            <div className="mb-6">
                <div className="text-lg font-semibold">Mini ERP</div>
                <div className="text-xs text-muted-foreground">Dashboard</div>
            </div>

            <div className="space-y-2">
                <Item to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
                <Item to="/customers" icon={<Users size={18} />} label="Customers" />
                <Item to="/products" icon={<Package size={18} />} label="Products" />
                <Item to="/orders" icon={<ShoppingCart size={18} />} label="Orders" />

                {isAdmin && <Item to="/reports" icon={<BarChart3 size={18} />} label="Reports" />}
            </div>
        </motion.aside>
    );
}
