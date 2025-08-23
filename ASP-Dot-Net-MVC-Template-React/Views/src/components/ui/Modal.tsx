import { Fragment, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Button from './Button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
}

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
};

const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <Fragment>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-neutral-100/5 dark:bg-neutral-600/10 backdrop-blur-lg z-50"
                        onClick={onClose}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={overlayVariants}
                    />
                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div
                            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg max-w-lg w-full mx-4 p-6 relative"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <Button
                                className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                onClick={onClose}
                            >
                                <FaTimes size={18} />
                            </Button>
                            {/* Title */}
                            {title && (
                                <h2 className="text-xl font-semibold mb-4 dark:text-white">{title}</h2>
                            )}
                            {/* Body */}
                            <div className="mb-4">{children}</div>
                            {/* Footer */}
                            {footer && <div className="flex justify-end gap-2">{footer}</div>}
                        </motion.div>
                    </motion.div>
                </Fragment>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
