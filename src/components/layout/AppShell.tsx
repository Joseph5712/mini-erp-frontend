import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-muted/30">
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Topbar />
                    <main className="p-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
