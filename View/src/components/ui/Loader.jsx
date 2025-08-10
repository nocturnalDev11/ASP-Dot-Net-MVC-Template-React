import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[100px]">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-2 border-t-transparent border-blue-300 rounded-full animate-spin [animation-duration:1.2s]"></div>
            </div>
        </div>
    );
};

export default Loader;