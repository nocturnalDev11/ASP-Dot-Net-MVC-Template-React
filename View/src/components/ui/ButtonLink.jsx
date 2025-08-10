import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ButtonLink = ({ to, children, className = '', ...props }) => {
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

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonLink;
