import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import winSound from '../assets/sounds/game-win.wav';
import logo from '../assets/dps-logo.png';
import HappyBoss from '../assets/boss/boss_happy.png';

function WinScreen() {
    localStorage.clear();
    useEffect(() => {
        const audio = new Audio(winSound);
        audio.play().catch(error => console.error("Error playing the sound:", error));
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-headerColor flex items-center justify-center">
                <img src={logo} alt="logo" width="85" className="my-3 mx-4" />
                <h1 className="text-secondaryLight text-3xl text-center py-6 font-pixelated ">Don't Phish Me</h1>
            </header>
            <div className="flex flex-1 bg-background items-center justify-center overflow-hidden">
                <img src={HappyBoss} className="h-40 w-32 absolute top-32" />
                <div className="bg-secondaryLight border-2 border-secondary rounded-2xl p-16 w-1/3 shadow-custom flex flex-col items-center justify-center"> {/* Flex applied here for content centering */}
                    <p className="text-center mb-4 font-pixelated text-primary text-2xl">Congratulations! You Won!!!</p>
                    <p className="text-center mb-4 font-cmd text-primary text-l">The CFO is very happy! You made sure the company did not lose money and hit record profits this quarter.</p>
                    <p className="text-center mb-4 font-cmd text-primary text-l">You selected all the correct emails in the correct fashion, good job!</p>
                    <Link to="/" className="font-cmd w-full bg-headerColor shadow-custom text-white rounded-lg px-4 py-2 hover:bg-primary text-center mt-4">Go Home</Link> {/* mt-4 for some margin top */}
                </div>
            </div>
        </div>
    );
}
export default WinScreen;