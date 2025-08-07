import { motion as Motion } from 'framer-motion'
import HomeContainer from '../../containers/HomeContainer'

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
                <HomeContainer />
            </Motion.div>
        </Motion.main>
    );
}
