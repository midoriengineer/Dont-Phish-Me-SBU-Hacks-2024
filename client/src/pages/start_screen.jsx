import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/loading_screen'; import { Link } from 'react-router-dom';
import logo from '../assets/pl-icon2.png'

const StartScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-[#22333b] flex items-center justify-center">
                <img src={logo} alt="logo" width="65" className="my-3 mx-4" />
                <h1 className="text-[#eae0d5] text-center py-6 font-pixelated ">Don't Phish Me</h1>
            </header>
            <div className="bg-[#eae0d5] flex flex-1 overflow-hidden">

                <div className="w-1/3 flex justify-center items-center pl-14">
                    <div className="bg-[#c6ac8f] rounded-xl p-16 shadow-custom text-center">
                        <h1 className="font-pixelated mb-4">A Game Educating You On Cybersecurity Fundamentals</h1>
                        <p className="text-gray-700 font-cmd">
                            Lorem ipsum dolor sit am et, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        </p>
                    </div>
                </div>

                <div className="w-1/3 flex justify-center items-center px-14">
                    <div className="bg-[#c6ac8f] rounded-2xl p-16 shadow-custom p-8">
                        <p className="text-center mb-4 font-pixelated font-thin text-primary">Welcome to Don't Phish Me</p>
                        <div className="mb-4">
                            <label htmlFor="rounds" className="font-cmd block mb-2 text-sm font-medium text-primary">Number of Rounds</label>
                            <select id="rounds" className="font-cmd bg-background shadow-custom border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red-500 block w-full p-2.5">
                                <option selected>Choose a round</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <Link to="/game" className="font-cmd w-full bg-headerColor shadow-custom text-white rounded-lg px-4 py-2 hover:bg-primary">Start Game</Link>
                    </div>
                </div>

                <div className="w-1/3 flex justify-center items-center px-14">
                    <div className="bg-[#c6ac8f] rounded-xl p-16 shadow-custom">
                        <h2 className="text-lg font-semibold mb-3 font-pixelated">Instructions:</h2>
                        <ul className="font-cmd list-disc list-inside">
                            <li >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default StartScreen;
