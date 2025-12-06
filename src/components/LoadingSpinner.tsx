import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center">
            <div className="relative h-16 w-16">
                <div className="absolute top-0 left-0 h-full w-full animate-spin rounded-full border-4 border-sky-500/30 border-t-sky-500"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
