import { motion as Motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import Card from '../components/ui/Card'

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
            className="flex items-center justify-center min-h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Motion.div variants={childVariants}>
                <div className="max-w-5xl mx-auto">
                    <Card
                        title={
                            <div className="flex items-center gap-2">
                                <FaHome className="text-neutral-800 dark:text-neutral-500" size={18} />
                                Home page
                            </div>
                        }
                        footer={<button className="text-blue-500">Learn More</button>}
                    >
                        <div className="space-y-5">
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center sm:text-left">
                                    Hi, // insert username syntax here
                                </h1>
                                <p className="text-neutral-700 dark:text-neutral-300 text-md sm:text-lg my-4 text-center sm:text-left">
                                    Welcome to Homepage
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, eum? Consectetur, dicta rem maxime aliquid incidunt error assumenda impedit quis iure! Temporibus ut sapiente commodi atque repellat minima maiores illo?
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Motion.div>
        </Motion.main>
    );
}
