import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import CreateItem from './Create';

export default function ItemsPage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.0, 0.0, 0.2, 1],
            },
        },
    };

    return (
        <motion.main
            className="flex items-center justify-center min-h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={childVariants}>
                <div className="max-w-5xl mx-auto p-20">
                    <Card
                        title={
                            <div className="flex items-center gap-2">
                                <FaList className="text-neutral-800 dark:text-neutral-500" size={18} />
                                <span className="dark:text-neutral-300">All Items</span>
                            </div>
                        }
                        footer={
                            <Link
                                to="/home-page"
                                className="text-blue-500 hover:underline"
                            >
                                Back to Home
                            </Link>
                        }
                    >
                        <div className="space-y-5">
                            <div>
                                <p className="text-neutral-700 dark:text-neutral-300 text-md sm:text-lg my-4 text-center sm:text-left">
                                    Welcome to Homepage
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, eum?
                                </p>

                                <div className="flex justify-center sm:justify-start">
                                    <CreateItem />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </motion.div>
        </motion.main>
    );
}