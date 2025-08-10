import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
    title, 
    footer, 
    children, 
    className = '', 
    headerClassName = '', 
    bodyClassName = '', 
    footerClassName = '' 
}) => {
    return (
        <div className={`flex flex-col p-3 bg-white border border-neutral-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 ${className}`}>
        
            {title && (
                <div className={`border-b border-neutral-200 rounded-t-xl py-2 px-4 md:py-3 md:px-5 dark:border-neutral-700 ${headerClassName}`}>
                {typeof title === 'string' ? (
                    <h2 className="text-lg font-semibold text-neutral-800 dark:text-white">
                        {title}
                    </h2>
                ) : (
                    title
                )}
                </div>
            )}

            <div className={`p-4 md:p-5 ${bodyClassName}`}>
                {children}
            </div>

            {footer && (
                <div className={`border-t border-neutral-200 rounded-b-xl py-2 px-4 md:py-3 md:px-5 dark:border-neutral-700 ${footerClassName}`}>
                    {typeof footer === 'string' ? (
                        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
                            {footer}
                        </p>
                    ) : (
                        footer
                    )}
                </div>
            )}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    bodyClassName: PropTypes.string,
    footerClassName: PropTypes.string,
};

export default Card;
