'use client';

import { useState, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function VideoDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable page scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-background">
          {/* Thumbnail view with play button */}
          <div className="relative">
            {/* Video thumbnail/poster */}
            <video
              className="w-full h-auto"
              muted
              playsInline
              style={{
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <source src="/DesignPro_ Onboarding Audit Demo.mp4" type="video/mp4" />
            </video>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={handlePlayClick}
                className="flex items-center justify-center w-16 h-16 bg-white/90 hover:bg-white transition-all duration-200 rounded-full shadow-lg"
              >
                <FaPlay className="text-black text-xl ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-5xl mx-4">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            {/* Video player */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-background">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                controls
                style={{
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <source src="/DesignPro_ Onboarding Audit Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 