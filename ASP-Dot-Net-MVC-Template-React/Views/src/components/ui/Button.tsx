import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button = ({
    className = '',
    children,
    type = 'button',
    disabled = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`py-2.5 px-5 font-medium rounded-lg cursor-pointer ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
