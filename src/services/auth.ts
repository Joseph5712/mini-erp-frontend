import { api } from "./api";

export type UserRole = "ADMIN" | "STAFF";

export type Me = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    created_at?: string;
    updated_at?: string;
};

export async function login(email: string, password: string) {
    const res = await api.post("/api/auth/login", { email, password });
    // res.data = { success: true, data: { token, user } }
    return res.data.data as { token: string; user: Me };
}

export async function me() {
    const res = await api.get("/api/auth/me");
    // res.data = { success: true, data: user }
    return res.data.data as Me;
}
