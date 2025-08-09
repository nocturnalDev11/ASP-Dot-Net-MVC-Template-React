import { motion as Motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '../../components/ui/Button'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export default function LandingPage() {
    const [count, setCount] = useState(0)
    const [apiMessage, setApiMessage] = useState('Loading...')

    useEffect(() => {
        fetch('/api/test')
            .then((res) => res.json())
            .then((data) => setApiMessage(data.msg))
            .catch((err) => {
                console.error('API error:', err);
                setApiMessage('Failed to load API');
            });
    }, [])

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
                    <div className="flex justify-center gap-4">
                        <a href="https://vite.dev" target="_blank">
                            <img src={viteLogo} className="h-24 p-6 transition-shadow duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="h-24 p-6 transition-shadow duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite] motion-reduce:animate-none" alt="React logo" />
                        </a>
                    </div>
                    <h1 className="text-4xl font-bold mt-4">Vite + React with ASP.Net</h1>
                    <h2 className="text-2xl mt-2">Backend says: {apiMessage}</h2>
                    <div className="p-8 mt-4">
                        <Button 
                            onClick={() => setCount((count) => count + 1)}
                            className="bg-neutral-500 text-white rounded hover:bg-neutral-600"
                        >
                            count is {count}
                        </Button>
                        <p className="mt-4">
                            Edit <code className="bg-neutral-100 p-1 rounded">src/App.jsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="text-neutral-500 mt-4">
                        Click on the Vite and React logos to learn more
                    </p>
                </div>
            </Motion.div>
        </Motion.main>
    );
}
