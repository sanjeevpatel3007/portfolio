'use client';
import { useEffect, useState } from 'react';

const CursorAnimation = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      // Immediate update for the dot
      setDotPosition({ x: e.clientX, y: e.clientY });
      
      // Smooth update for the ring
      setTimeout(() => {
        setRingPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <div 
        className="fixed w-2 h-2 bg-[#16f2b3] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
        style={{ 
          left: `${dotPosition.x}px`, 
          top: `${dotPosition.y}px`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      {/* Ring cursor */}
      <div 
        className="fixed w-8 h-8 border-2 border-[#16f2b3]/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ 
          left: `${ringPosition.x}px`, 
          top: `${ringPosition.y}px`,
          transition: 'all 0.3s ease-out'
        }}
      />
    </>
  );
};

export default CursorAnimation; 