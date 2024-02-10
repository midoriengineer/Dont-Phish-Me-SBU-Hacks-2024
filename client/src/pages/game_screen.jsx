import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/loading_screen';

const GameScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-gray-200 h-1/6">
                <div className="bg-orange-200 h-1/6">
                    <p>DON'T PHISH ME</p>
                </div>
            </header>


            <div className="flex flex-1 overflow-hidden">

                <div className="w-1/4 bg-red-100 p-4 flex flex-col">
                    <div className="flex-1 overflow-auto"></div>
                </div>

                <div className="bg-blue-800 flex-1 overflow-auto p-4"></div>

                <div className="w-1/5 bg-gray-100 p-4 flex flex-col">
                    <div className="flex-1 overflow-auto"></div>
                </div>

                {/* CODE A TIMER */}

            </div>
        </div>
    );
};

export default GameScreen;
