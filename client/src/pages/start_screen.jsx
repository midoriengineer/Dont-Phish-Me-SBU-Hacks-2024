import React from 'react';
import { Link } from 'react-router-dom';

const StartScreen = () => {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-[#223843] shadow-lg">
                <h1 className="text-white text-center py-6 font-pixelated">Don't Phish Me</h1>
            </header>
            <div className="bg-[#D8B4A0] flex flex-1 overflow-hidden">

                <div className="w-1/3 p-4 text-center">
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="w-1/3 flex justify-center items-center">
                    <div className="bg-[#D77A61] rounded-xl p-16 drop-shadow-xl">
                        <p className="text-center mb-4 font-bold">Welcome to Don't Phish Me</p>
                        <div className="mb-4">
                            <label htmlFor="rounds" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number of Rounds</label>
                            <select id="rounds" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Choose a round</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <Link to="/game" className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">Start Game</Link>
                    </div>
                </div>

                <div className="w-1/3 p-4">
                    <h2 className="text-lg font-semibold mb-3">Instructions:</h2>
                    <ul className="list-disc list-inside">
                        <li>Instruction one</li>
                        <li>Instruction two</li>
                        <li>Instruction three</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default StartScreen;
