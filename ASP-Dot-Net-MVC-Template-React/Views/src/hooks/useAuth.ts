import { useEffect } from 'react';
import api from '../libs/api';
import { useAuthStore } from '../stores/auth.store';
import type { AxiosError } from 'axios';

interface LoginDto {
    email: string;
    password: string;
}

interface RegisterDto {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    birthDate: string;
    address: string;
    password: string;
}

export function useAuth() {
    const { login, logout, user } = useAuthStore();
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("jwt");
        if (token && storedUser) {
            try {
                login(token, JSON.parse(storedUser));
            } catch {
                logout();
            }
        } else if (token) {
            api.get("/UserApi/profile")
            .then(res => {
                login(token, res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
            })
            .catch(err => {
                console.error("Profile fetch failed", err);
                logout();
            });
        }
    }, []);


    const loginUser = async (dto: LoginDto) => {
        const res = await api.post("/auth/login", dto);
        if (res.data.token) {
            localStorage.setItem("jwt", res.data.token);
            const profile = await api.get("/UserApi/profile");
            login(res.data.token, profile.data);
        }
    };

    const registerUser = async (dto: RegisterDto) => {
        try {
            const res = await api.post("/auth/register", {
                FirstName: dto.firstName,
                LastName: dto.lastName,
                UserName: dto.userName,
                Email: dto.email,
                PhoneNumber: dto.phoneNumber,
                BirthDate: dto.birthDate || null,
                Address: dto.address,
                Password: dto.password
            });
            return res.data;
        } catch (err) {
            const error = err as AxiosError<{ error?: string }>;
            console.error("Registration error:", error.response?.data || error.message);
            throw error;
        }
    };

    return { user, token, loginUser, registerUser, logout };
}
