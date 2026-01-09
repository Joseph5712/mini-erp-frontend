import Page from "../../components/layout/Page";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-muted/30">
            <Page>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                    Aquí vamos a mostrar métricas y accesos rápidos.
                </p>
            </Page>
        </div>
    );
}
