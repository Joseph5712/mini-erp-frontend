import AppShell from "../../components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export default function DashboardPage() {
    return (
        <AppShell>
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Dashboard</h1>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">Total Sales</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-semibold">—</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">Orders</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-semibold">—</CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">Top Product</CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-semibold">—</CardContent>
                    </Card>
                </div>
            </div>
        </AppShell>
    );
}
