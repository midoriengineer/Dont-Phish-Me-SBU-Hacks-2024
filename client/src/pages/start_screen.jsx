import React from 'react';

const StartScreen = () => {
    return (
        <div>
            <header className="bg-[#223843]">
                <h1 className="text-white py-6 px-2">Don't Phish Me</h1>
            </header>
            <div className="bg-[#D8B4A0] flex flex-1 overflow-hidden h-screen">

                <div className="w-1/3">

                </div>

                <div className="w-1/3">
                    <div className="bg-[#DBD3D8] rounded-xl p-16 drop-shadow-xl">
                        <p>Hi there</p>
                    </div>
                </div>

                <div className="w-1/3">

                </div>

            </div>
        </div>
    );
};

export default StartScreen;
