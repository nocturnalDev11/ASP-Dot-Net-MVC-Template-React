import { motion as Motion } from 'framer-motion'
import { FaUser, FaLock } from 'react-icons/fa'
import Card from '../../components/ui/Card'
import Input from '../../components/forms/Input'
import Button from '../../components/ui/Button'

export default function UserLogin() {
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
                <div className="max-w-5xl mx-auto text-center">
                    <Card>
                        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                        <form className="space-y-4">
                            <Input 
                                type="text" 
                                placeholder="Username" 
                                value="" 
                                onChange={() => {}} 
                                icon={FaUser} 
                            />

                            <Input 
                                type="password" 
                                placeholder="Password" 
                                value="" 
                                onChange={() => {}} 
                                icon={FaLock}
                            />

                            <Button type="submit" className="w-full bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white">
                                Login
                            </Button>
                        </form>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account? <a href="/register" className="text-indigo-600 dark:text-indigo-400 hover:underline">Register</a>
                        </p>
                    </Card>
                </div>
            </Motion.div>
        </Motion.main>
    );
}
