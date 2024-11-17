import React from 'react';

const LoadingEffect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        {/* Glowing background circle */}
        <div className="absolute inset-0 animate-pulse">
          <div className="w-32 h-32 bg-amber-500/20 rounded-full blur-xl"></div>
        </div>

        {/* Central hexagon */}
        <div className="relative w-24 h-24">
          {/* Rotating outer hexagon */}
          <div className="absolute inset-0 animate-spin [animation-duration:3s]">
            <div className="w-full h-full border-2 border-amber-500/50" 
                 style={{ 
                   clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                 }}>
            </div>
          </div>

          {/* Counter-rotating inner hexagon */}
          <div className="absolute inset-2 animate-spin [animation-duration:2s] [animation-direction:reverse]">
            <div className="w-full h-full border-2 border-amber-500" 
                 style={{ 
                   clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                 }}>
            </div>
          </div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Animated dots and loading text in a container */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          {/* Dots */}
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          
          {/* Loading text */}
          <div className="text-center">
            <p className="text-lg font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              LOADING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingEffect;