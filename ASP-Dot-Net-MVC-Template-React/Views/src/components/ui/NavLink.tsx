import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
    const location = useLocation();
    const isActive = location.pathname === to;

    const baseClasses = "block py-2 px-3 md:p-0 rounded-sm";

    const activeClasses =
        "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500";

    const inactiveClasses =
        "text-neutral-900 hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-neutral-700";

    return (
        <Link
            to={to}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            aria-current={isActive ? "page" : undefined}
        >
            {children}
        </Link>
    );
}
