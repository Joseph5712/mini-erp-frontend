import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { me as apiMe, login as apiLogin, Me } from "../services/auth";
import { getToken, removeToken, setToken } from "../utils/token";

type AuthState = {
    user: Me | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAdmin: boolean;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Me | null>(null);
    const [loading, setLoading] = useState(true);

    async function bootstrap() {
        const token = getToken();
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const profile = await apiMe();
            setUser(profile);
        } catch {
            removeToken();
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        bootstrap();
    }, []);

    async function login(email: string, password: string) {
        const { token, user } = await apiLogin(email, password);
        setToken(token);
        setUser(user);
    }

    function logout() {
        removeToken();
        setUser(null);
    }

    const value = useMemo(
        () => ({
            user,
            loading,
            login,
            logout,
            isAdmin: user?.role === "ADMIN",
        }),
        [user, loading]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
