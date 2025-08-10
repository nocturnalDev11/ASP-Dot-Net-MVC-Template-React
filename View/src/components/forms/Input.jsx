import React from 'react'
import PropTypes from 'prop-types';

const Input = ({ type = 'text', placeholder = '', value, onChange, icon: Icon, ...props }) => {
    return (
        <div className="relative">
            <input
                type={type}
                className="peer py-2.5 sm:py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            {Icon && (
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                    <Icon className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
                </div>
            )}
        </div>
    );
}  

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.elementType
};

export default Input;