import React from 'react'
import './index.css'
import PixelDesktop from './components/PixelDesktop'

function App() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
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
        </div>
    )
}

export default App
