import React from 'react';

const GameScreen = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="bg-gray-200 h-1/6">
                <div className="bg-orange-200 h-1/6">
                    <p>DON'T PHISH ME</p>
                </div>
            </header>


            {/* Main content and sidebars */}
            <div className="flex flex-1 overflow-hidden">

                <div className="w-1/4 bg-red-100 p-4 flex flex-col">
                    <div className="flex-1 overflow-auto"></div>
                </div>

                <div className="bg-blue-800 flex-1 overflow-auto p-4"></div>

                <div className="w-1/5 bg-gray-100 p-4 flex flex-col">
                    {/* Sidebar content */}
                    <div className="flex-1 overflow-auto"></div>
                </div>

            </div>
        </div>
    );
};

export default GameScreen;
