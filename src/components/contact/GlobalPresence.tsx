
import React from 'react';

export default function GlobalPresence() {
  return (
    <div className="rounded-xl overflow-hidden relative h-64 md:h-96 bg-dark-lighter/50 backdrop-blur-lg border border-white/10 group hover:border-neon-blue/30 transition-all duration-500">
      {/* Stylized World Map Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-dashed border-neon-blue/30 animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full border-2 border-dashed border-neon-purple/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-dashed border-neon-yellow/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Location markers */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neon-blue rounded-full pulse-glow"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-neon-purple rounded-full pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-neon-yellow rounded-full pulse-glow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-blue rounded-full pulse-glow"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-dark/0 via-dark/50 to-dark/80">
        <div className="text-center p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Global Web3 Presence</h3>
          <p className="text-gray-300 max-w-lg">
            Our team works remotely across multiple time zones to provide you with round-the-clock Web3 innovation and support.
          </p>
        </div>
      </div>
    </div>
  );
}
