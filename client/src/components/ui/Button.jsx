import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className = '', children, type = 'button', disabled = false, ...props }) => {
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

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
};

export default Button;