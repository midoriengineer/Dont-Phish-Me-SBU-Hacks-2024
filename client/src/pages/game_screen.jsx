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
            <header className="bg-headerColor h-1/6">
                <div className="bg-primary 200 h-1/6">
                    <p className="text-background font-pixelated text-2xl">DON'T PHISH ME</p>
                </div>
            </header>


            <div className="flex flex-1 overflow-hidden">

                <div className="w-1/4 bg-secondaryLight p-4 flex flex-col">
                    <div className="flex-1 overflow-auto"></div>
                </div>

                <div className="bg-background flex-1 overflow-auto p-4"></div>

                <div className="w-1/5 bg-secondary p-4 flex flex-col"> {/* Control Panel*/}
                    <div className="flex-1 overflow-auto flex flex-col items-center justify-start">

                        <button className="bg-red-500 hover:bg-red-700 text-white p-4 mb-4 w-32 h-32 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64">
                                <path fill="#39424D" d="M52 10H44V8c0-2.209-1.791-4-4-4H24c-2.209 0-4 1.791-4 4v2H12c-2.209 0-4 1.791-4 4v3H8v2h2v36c0 3.309 2.691 6 6 6h36c3.309 0 6-2.691 6-6V19h2v-2h-4v-3c0-2.209-1.791-4-4-4zm-4 0H16V8h8v2h16V8h8v2zM22 12H14V8h8v4zm8 2h-8v-2h8v2zm16 0h-8v-2h8v2zm8-2h-8V8h8v4z" />
                                <path fill="#ECEFF4" d="M52 18H12v36c0 2.206 1.794 4 4 4h36c2.206 0 4-1.794 4-4V18zM24 8h16v4H24V8zm-8 4h8v4h-8v-4zm32 40H16V19h36v29z" />
                                <path fill="#FFF" d="M22 44h-4v-8h4v8zm8 0h-4v-8h4v8zm8 0h-4v-8h4v8zm8 0h-4v-8h4v8zm-24-12h-4v-8h4v8zm8 0h-4v-8h4v8zm8 0h-4v-8h4v8zm-24-12h-4v-8h4v8zm8 0h-4v-8h4v8zm8 0h-4v-8h4v8zm-24-12h-4v-8h4v8zm8 0h-4v-8h4v8zm8 0h-4v-8h4v8zm-16-4h8v4h-8v-4z" />
                            </svg>
                        </button>

                        <button className="bg-green-500 hover:bg-green-700 text-white p-4 w-32 h-32 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16">
                                <path fill="#000000" d="M5.775 11.084L2.891 8.2c-.19-.19-.48-.204-.668-.03-.187.173-.203.466-.03.655l3.203 3.203c.372.373.95.387 1.324.03l7.797-7.797c.19-.19.176-.48-.03-.668-.204-.206-.507-.19-.668.03L6.082 11.084c-.127.127-.335.127-.46 0z" />
                            </svg>
                        </button>
                        <h1 className="font-pixelated text-2xl text-background py-10">Time Left: </h1>

                    </div>
                </div>


                {/* CODE A TIMER */}

            </div>
        </div>
    );
};

export default GameScreen;
