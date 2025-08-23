import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

interface ButtonLinkProps extends LinkProps {
    to: string;
    className?: string;
    children: ReactNode;
}

const ButtonLink = ({ to, children, className = '', ...props }: ButtonLinkProps) => {
    return (
        <Link
            to={to}
            className={`inline-block py-2.5 px-5 font-medium rounded-lg cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
