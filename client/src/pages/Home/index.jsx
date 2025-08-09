import { motion as Motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import Card from '../../components/ui/Card'

export default function HomePage() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.0, 0.0, 0.2, 1],
                staggerChildren: 0.2,
            },
        },
    };

    const childVariants = {
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
        <Motion.main
            className="flex flex-col space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Motion.div variants={childVariants}>
                <Card
                    title={
                        <div className="flex items-center gap-2">
                            <FaHome className="text-neutral-800 dark:text-neutral-500" size={18} />
                            Custom Header
                        </div>
                    }
                    footer={<button className="text-blue-500">Learn More</button>}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-400 flex items-center">
                                <svg
                                    className="w-2 h-2 mr-5 text-neutral-800 dark:text-neutral-500"
                                    fill="currentColor"
                                    viewBox="0 0 8 8"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                                Home Page
                            </h3>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center sm:text-left">
                                Home Page
                            </h1>
                            <p className="text-neutral-700 dark:text-neutral-300 text-md sm:text-lg my-4 text-center sm:text-left">
                                Welcome to Homepage
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, eum? Consectetur, dicta rem maxime aliquid incidunt error assumenda impedit quis iure! Temporibus ut sapiente commodi atque repellat minima maiores illo?
                            </p>
                        </div>
                    </div>
                </Card>
            </Motion.div>
        </Motion.main>
    );
}
