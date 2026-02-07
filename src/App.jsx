import React, { useState } from 'react'
import './index.css'
import PixelDesktop from './components/PixelDesktop'

function App() {
    const [loading, setLoading] = useState(true);
    const [started, setStarted] = useState(false);

    const handleVideoEnd = () => {
        setLoading(false);
    };

    const handleStart = () => {
        setStarted(true);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {loading ? (
                // Preloading Video Overlay
                <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
                    {!started ? (
                        <button
                            onClick={handleStart}
                            className="text-white text-xl animate-pulse font-pixel border-2 border-white p-4 rounded hover:bg-white hover:text-black transition-colors"
                        >
                            Tap to Open 💌
                        </button>
                    ) : (
                        <video
                            autoPlay
                            playsInline
                            className="w-full h-full object-contain"
                            onEnded={handleVideoEnd}
                        >
                            <source src="/wybmv-web-loading.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ) : (
                <>
                    {/* Main Content */}
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                        <source src="/background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark Overlay for readability */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

                    {/* Pixel Desktop Interface */}
                    <PixelDesktop />
                </>
            )}
        </div>
    )
}

export default App
