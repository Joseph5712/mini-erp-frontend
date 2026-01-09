import Page from "../../components/layout/Page";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-screen grid place-items-center bg-gradient-to-b from-background to-muted/40">
            <Page>
                <Card className="w-[380px] shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl">Mini ERP</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Inicia sesión para continuar
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input placeholder="you@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label>Password</Label>
                            <Input type="password" placeholder="••••••••" />
                        </div>
                        <Button className="w-full">Login</Button>
                    </CardContent>
                </Card>
            </Page>
        </div>
    );
}
