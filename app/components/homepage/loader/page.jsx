'use client'
import { useState, useEffect } from 'react';
import ThreeAnimation from './ThreeAnimation';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const loadingTexts = [
    "Initializing...",
    "Loading Projects...",
    "Loading Skills...",
    "Almost there..."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    setText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-[#0d1224] z-50 flex flex-col items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-violet-600/50 to-pink-600/50 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Three.js Animation */}
        <div className="mb-8">
          <ThreeAnimation />
        </div>

        {/* Loading text */}
        <div className="text-white text-xl font-medium mb-8 min-h-[2rem] animate-fade">
          {text}
        </div>

        {/* Progress bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300 ease-out rounded-full relative"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(to right, rgb(124, 58, 237), rgb(219, 39, 119))'
            }}
          >
            {/* Shine effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine"
            />
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-3 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/50"
              style={{
                animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-violet-500/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-pink-500/20 rounded-full animate-spin-slow-reverse" />

      <style jsx>{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Loader; 