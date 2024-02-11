import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/loading_screen';
import Trash from '../assets/trash.svg';
import Check from '../assets/check.svg';
import Quit from '../assets/quit.svg';
import ProfileImage from '../assets/creepyguy.jpg';
import Approve from '../assets/sounds/approve.wav';
import Delete from '../assets/sounds/delete.wav';
import GameOver from '../assets/sounds/game-over.wav';
import GameWin from '../assets/sounds/game-win.wav';
import Dots from '../assets/dots.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';


const GameScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [playSound, setPlaySound] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(axios.get("http://localhost:4000/"));
        console.log(data);
    })

    useEffect(() => {
        if (playSound) {
            const audio = new Audio(playSound);
            audio.play()
                .then(() => {
                    setPlaySound(null);
                })
                .catch(error => console.error("Error playing the sound:", error));
        }
    }, [playSound]);

    const handleButtonClick = (sound) => {
        setPlaySound(sound);
    };

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

            <header className="bg-headerColor h-1/6">
                <div className="bg-primary 200 h-1/6">
                    <p className="text-background font-pixelated text-2xl">DON'T PHISH ME</p>
                </div>
                <p className="text-background font-pixelated p-8">Inbox: 4 (unread mail)</p>
            </header>

            <div className="flex flex-1 overflow-hidden">

                <div className="w-1/4 bg-secondaryLight p-4 flex flex-col items-center">
                    <div className="flex-1 overflow-auto w-full">
                        <h1 className="font-pixelated font-bold text-4xl text-primary mt-8 mb-6 text-center">About</h1>
                        <div className="w-48 h-48 overflow-hidden shadow-circle object-center flex justify-center items-center mx-auto mb-10"> {/* Centered div */}
                            <img src={ProfileImage} className="w-full h-full object-cover object-center" /> {/* Centered image */}
                        </div>
                        <p className="font-cmd text-s bg-background border-2 border-secondary py-2 pl-6 m-4 shadow-custom text-left"><span className="font-black">Name: </span>John Doe</p>
                        <p className="font-cmd text-xs bg-background border-2 border-secondary py-6 pl-6 m-4 shadow-custom text-left">
                            <span className="font-black">from:</span> Creepy Inc. &lt;creepy@h23dwo0.ru&gt;<br />
                            <span className="font-black">to: </span> "&lt;dontphishme@dpm.com&gt;<br />
                            <span className="font-black">date: </span>Feb 10, 2024, 1:04 AM<br />
                            <span className="font-black">subject: </span>Please confirm your SSN<br />
                            <span className="font-black">security: </span>Unverified<br />
                        </p>
                    </div>
                </div>


                <div className="bg-background border-secondary border-2 flex-1 overflow-auto">
                    <div className="bg-background border-2 border-secondary shadow-custom flex justify-between">
                        <p className="px-4 py-1 font-pixelated">SBU Hacks Mail</p>
                        <p className="px-4 py-1 font-pixelated"> - [] X</p>
                    </div>

                    <div className="bg-background border-2 border-secondary py-2 pl-6 m-6 shadow-custom">
                        <p className="font-cmd font-bold">{data.Subject}</p>
                    </div>
                    <div className="bg-background border-2 border-secondary py-2 pl-6 m-6 shadow-custom">
                        <p className="font-cmd">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl dolor, tincidunt aliquam rutrum sed, cursus quis diam. Donec facilisis auctor nulla, sit amet aliquam diam convallis in. Morbi et vestibulum lectus. Morbi elementum congue tortor, ac accumsan felis lobortis vel. Fusce sed justo scelerisque, sodales risus nec, volutpat ante. Proin aliquet arcu sed felis aliquam egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi feugiat elit vel eros pellentesque vulputate. Suspendisse non tellus finibus, finibus magna id, aliquam nisl.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="text-center font-cmd bg-background border-2 border-secondary py-2 pl-6 m-4 px-14 py-2 shadow-custom">Reply</button>
                        <button className="text-center font-cmd bg-background border-2 border-secondary py-2 pl-6 m-4 px-14 py-2 shadow-custom">Forward</button>
                        <button className="text-center font-cmd bg-background border-2 border-secondary flex items-center justify-center py-2 pl-6 m-4 px-14 py-2 shadow-custom">
                            More <img src={Dots} alt="More" className="h-6 ml-2" />
                        </button>
                    </div>
                </div>


                <div className="w-1/5 bg-secondary p-4 flex flex-col">
                    {/* Control Panel */}
                    <div className="flex-1 overflow-auto flex flex-col items-center justify-start">
                        <h1 className="font-pixelated text-3xl text-background py-10">Controls</h1>
                        <Link to="/" className="bg-background hover:bg-background/[0.7] text-white p-4 mb-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Quit} alt="Quit Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Quit Game</h1>
                            </div>
                        </Link>
                        <button onClick={() => handleButtonClick(Delete)}
                            className="bg-red-500 hover:bg-red-600 text-white p-4 mb-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Trash} alt="Trash Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Delete Email</h1>
                            </div>
                        </button>
                        <button onClick={() => handleButtonClick(Approve)}
                            className="bg-green-500 hover:bg-green-600 text-white p-4 w-32 h-32 flex flex-col items-center justify-center shadow-button">
                            <div className="flex flex-col items-center justify-center">
                                <img src={Check} alt="Check Icon" className="h-16" />
                                <h1 className="text-primary font-pixelated">Approve Email</h1>
                            </div>
                        </button>
                        <h1 className="font-pixelated text-xl text-background py-10">Time Left: 59</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GameScreen;