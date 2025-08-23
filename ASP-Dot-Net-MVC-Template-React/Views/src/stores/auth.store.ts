import { create } from 'zustand';

interface User {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    login: (token: string, user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: localStorage.getItem("jwt"),
    login: (token, user) => {
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        set({ token, user });
    },
    logout: () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        set({ user: null, token: null });
    },
}));
