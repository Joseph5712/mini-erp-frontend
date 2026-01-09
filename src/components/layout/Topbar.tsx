import { Button } from "../ui/button";
import { useAuth } from "../../store/AuthContext";
import { LogOut } from "lucide-react";

export default function Topbar() {
    const { user, logout } = useAuth();

    return (
        <header className="h-16 border-b bg-background px-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                Welcome, <span className="text-foreground font-medium">{user?.name}</span>
            </div>

            <Button variant="outline" size="sm" onClick={logout} className="gap-2">
                <LogOut size={16} />
                Logout
            </Button>
        </header>
    );
}
