import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useItems } from '../../hooks/useItems';
import { FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import CreateItem from './Create';

export default function ItemsPage() {
    const { items, loading } = useItems(); 
    
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
                                <FaList size={18} />
                                <span>All Items</span>
                            </div>
                        }
                        footer={
                            <Link to="/home-page" className="text-blue-500 hover:underline">
                                Back to Home
                            </Link>
                        }
                    >
                        <div className="flex justify-center sm:justify-start mb-4">
                            <CreateItem />
                        </div>

                        {/* Render all items here */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {loading ? (
                                <p>Loading items...</p>
                            ) : items.length === 0 ? (
                                <p>No items found.</p>
                            ) : (
                                items.map(item => (
                                    <Card key={item.id} title={item.sampleString}>
                                        <p>Number: {item.sampleNumber}</p>
                                        <p>Decimal: {item.sampleDecimal}</p>
                                        <p>Double: {item.sampleDouble}</p>
                                        <p>Float: {item.sampleFloat}</p>
                                        <p>Bool: {item.sampleBool ? 'Yes' : 'No'}</p>
                                        <p>Character: {item.sampleCharacter}</p>
                                    </Card>
                                ))
                            )}
                        </div>
                    </Card>
                </div>
            </motion.div>
        </motion.main>
    );
}