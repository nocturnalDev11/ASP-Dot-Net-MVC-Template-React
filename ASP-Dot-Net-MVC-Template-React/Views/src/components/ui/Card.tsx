import type { ReactNode } from 'react';

interface CardProps {
    title?: string | ReactNode;
    footer?: string | ReactNode;
    children: ReactNode;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
}

const Card = ({
    title,
    footer,
    children,
    className = '',
    headerClassName = '',
    bodyClassName = '',
    footerClassName = '',
}: CardProps) => {
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

export default Card;
