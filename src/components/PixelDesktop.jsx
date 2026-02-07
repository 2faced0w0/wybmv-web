import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Folder, Mail, Palette } from 'lucide-react';

const PixelDesktop = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [celebrationGif, setCelebrationGif] = useState("https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif");
    const [showFinalMessage, setShowFinalMessage] = useState(false);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (yesPressed) {
            const timer = setTimeout(() => {
                setCelebrationGif("/alex-geerken-geerken.gif");
                setShowFinalMessage(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [yesPressed]);

    // Phrases that cycle when the "No" button is hovered/clicked
    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "You might regret this!",
        "Mommy please ;_;",
        "Give it another thought!",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "You're breaking my heart ;_;",
        "Please say yes!"
    ];

    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    const handleNoInteraction = () => {
        setNoCount(noCount + 1);
        // Limit movement to avoid going off-screen. 
        // We use a max range of 300px or half the screen width/height, whichever is smaller.
        const maxMoveX = Math.min(window.innerWidth / 2 - 50, 300);
        const maxMoveY = Math.min(window.innerHeight / 2 - 50, 300);

        const x = (Math.random() - 0.5) * 2 * maxMoveX;
        const y = (Math.random() - 0.5) * 2 * maxMoveY;

        setNoButtonPos({ x, y });
    };

    const handleYesClick = () => {
        setYesPressed(true);
    };

    const yesButtonSize = noCount * 20 + 35;

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center font-pixel overflow-hidden z-30">
            {/* 
                Structure: 
                - Floating Icons (Absolute)
                - Main Window (Centered) 
            */}

            {/* Top Center Code Bubble */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black text-green-400 p-2 border-2 border-gray-500 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                <code className="text-sm md:text-base">console.log("Hello World!");</code>
            </div>

            {/* Top Left Folders */}
            <div className="absolute top-20 left-4 md:left-10 flex flex-col gap-6">
                <div className="flex flex-col items-center cursor-pointer pointer-events-auto hover:scale-110 transition-transform group">
                    <Folder size={48} color="#CE93D8" fill="#CE93D8" className="drop-shadow-md" />
                    <span className="text-white bg-black/50 px-1 rounded text-sm mt-1">My Files</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer pointer-events-auto hover:scale-110 transition-transform group">
                    <Folder size={48} color="#FFF59D" fill="#FFF59D" className="drop-shadow-md" />
                    <span className="text-white bg-black/50 px-1 rounded text-sm mt-1">Documents</span>
                </div>
            </div>

            {/* Bottom Left Envelope */}
            <div className="absolute bottom-20 left-4 md:left-10 flex flex-col items-center cursor-pointer pointer-events-auto hover:animate-bounce">
                <Mail size={56} color="#CE93D8" fill="#F3E5F5" className="drop-shadow-md" />
                <span className="text-white bg-black/50 px-1 rounded text-sm mt-1">Love Mail</span>
            </div>

            {/* Top Right Paint Palette */}
            <div className="absolute top-20 right-4 md:right-10 flex flex-col items-center cursor-pointer pointer-events-auto hover:rotate-12 transition-transform">
                <Palette size={48} color="#F48FB1" fill="#FCE4EC" className="drop-shadow-md" />
                <span className="text-white bg-black/50 px-1 rounded text-sm mt-1">Art</span>
            </div>

            {/* Main Window */}
            {/* pointer-events-auto is crucial because the parent is pointer-events-none */}
            <div className="pointer-events-auto relative w-[90%] md:w-[90%] max-w-2xl bg-[#FCE4EC] border-4 border-[#F48FB1] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex flex-col">
                {/* Window Header */}
                <div className="bg-[#F48FB1] p-2 flex items-center justify-between border-b-4 border-[#F8BBD0]">
                    <span className="text-white font-bold tracking-wider ml-2 drop-shadow-sm">For You &lt;3</span>
                    <div className="flex gap-2 mr-2">
                        <div className="w-4 h-4 bg-white border-2 border-pink-400 cursor-pointer hover:bg-gray-100"></div>
                        <div className="w-4 h-4 bg-white border-2 border-pink-400 cursor-pointer hover:bg-gray-100"></div>
                        <div className="w-4 h-4 bg-red-400 border-2 border-red-500 cursor-pointer hover:bg-red-300"></div>
                    </div>
                </div>

                {/* Window Body */}
                <div className="p-3 md:p-8 flex flex-col md:flex-row items-center gap-6">

                    {yesPressed ? (
                        <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center animate-pulse relative">
                            {showFinalMessage && (
                                <div className="absolute top-10 md:top-20 z-50 animate-bounce">
                                    <div className="bg-white border-4 border-[#F48FB1] p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] relative">
                                        <p className="text-xl md:text-3xl font-bold text-[#AD1457] whitespace-nowrap">
                                            Now you are mine FOREVER!
                                        </p>
                                        {/* Speech Bubble Tail */}
                                        <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-[#F48FB1] border-r-[10px] border-r-transparent"></div>
                                        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent"></div>
                                    </div>
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl text-[#E91E63] font-bold mb-4">YAY!!!</h1>
                            <p className="text-2xl text-[#880E4F]">Best Valentine Ever! ❤️</p>
                            <img
                                src={celebrationGif}
                                alt="Celebration"
                                className="mt-8 rounded-lg border-4 border-[#F48FB1]"
                            />
                        </div>
                    ) : (
                        <>
                            {/* Left: Cat Image */}
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <img
                                    src="https://media.tenor.com/gxvJFh-wA88AAAAi/cuphead.gif"
                                    alt="Working Cat"
                                    className="pixel-art rounded border-2 border-[#F48FB1] shadow-md w-full max-w-[200px] object-cover"
                                />
                            </div>
                            {/* Right: Content */}
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl text-[#880E4F] font-bold mb-6 leading-tigher drop-shadow-sm">
                                    Will you be my Valentine?
                                </h2>

                                <div className="text-lg text-[#AD1457] font-mono mb-8 bg-pink-100 p-2 rounded w-full">
                                    &gt; pretty, pwease?<span className="animate-blink">_</span>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-4 w-full relative h-20">
                                    <button
                                        className="rounded shadow-[4px_4px_0px_0px_rgba(216,27,96,0.3)] transition-transform active:translate-y-1 active:shadow-none"
                                        style={{
                                            fontSize: yesButtonSize,
                                            backgroundColor: 'white',
                                            color: '#D81B60',
                                            border: `2px solid #D81B60`,
                                            padding: '0.75rem 2.5rem',
                                            fontWeight: 'bold'
                                        }}
                                        onClick={handleYesClick}
                                    >
                                        Yes
                                    </button>

                                    <motion.button
                                        className="rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] z-50 font-bold"
                                        animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        onMouseEnter={handleNoInteraction}
                                        onClick={handleNoInteraction}
                                        style={{
                                            position: noCount > 0 ? 'absolute' : 'relative',
                                            backgroundColor: '#D81B60',
                                            color: 'white',
                                            border: `2px solid #D81B60`,
                                            padding: '0.75rem 2rem',
                                            fontSize: '1.25rem'
                                        }}
                                    >
                                        {noCount === 0 ? "No" : getNoButtonText()}
                                    </motion.button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PixelDesktop;
