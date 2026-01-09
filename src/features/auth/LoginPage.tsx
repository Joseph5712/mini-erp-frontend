import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/layout/Page";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../store/AuthContext";

export default function LoginPage() {
    const nav = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        try {
            setLoading(true);
            await login(email, password);
            nav("/", { replace: true });
        } catch (err: any) {
            setError(err?.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-b from-background to-muted/40">
            <Page>
                <Card className="w-[380px] shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl">Mini ERP</CardTitle>
                        <p className="text-sm text-muted-foreground">Inicia sesión para continuar</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" />
                            </div>

                            {error && <p className="text-sm text-red-500">{error}</p>}

                            <Button className="w-full" disabled={loading}>
                                {loading ? "Signing in..." : "Login"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Page>
        </div>
    );
}
