import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
        return localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
        }
        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-3 rounded-lg bg-gray-300 text-black  dark:bg-gray-700 dark:text-white transition-colors cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600"
        >
            {theme === "light" ? (
                <FaMoon size={20} />
            ) : (
                <FaSun size={20} />
            )}
        </button>
    );
}
