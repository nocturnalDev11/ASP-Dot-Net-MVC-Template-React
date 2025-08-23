import type { ChangeEvent, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name: string;
}

const Checkbox = ({ checked, onChange, label, name, ...props }: CheckboxProps) => {
    return (
        <label className="flex items-center space-x-2 rtl:space-x-reverse">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="w-5 h-5 rounded border-gray-300 dark:border-neutral-600 dark:bg-neutral-700"
                {...props}
            />
            {label && <span className="text-gray-700 dark:text-neutral-300">{label}</span>}
        </label>
    );
};

export default Checkbox;
