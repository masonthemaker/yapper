'use client';

import React from 'react';
import { FaPlay, FaTrash } from 'react-icons/fa';

interface CallHistoryItem {
  id: string;
  timestamp: Date;
  tags: string[];
  audioUrl: string;
}

interface CallHistoryProps {
  calls: CallHistoryItem[];
  onPlay: (id: string) => void;
  onDelete: (id: string) => void;
}

const CallHistory: React.FC<CallHistoryProps> = ({ calls, onPlay, onDelete }) => {
  // Add function to generate random pastel colors with matching text color
  const getRandomColorPair = () => {
    const hue = Math.floor(Math.random() * 360);
    const pastelBg = `hsla(${hue}, 70%, 85%, 0.3)`; // Transparent pastel background
    const textColor = `hsl(${hue}, 80%, 45%)`; // Brighter text color with increased saturation and lightness
    return { background: pastelBg, text: textColor };
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">AI Call History</h2>
      <div className="space-y-4">
        {calls.map((call) => (
          <div 
            key={call.id} 
            className="flex items-center justify-between p-4 rounded-lg
                       backdrop-blur-md bg-gray-600/20 border border-white/20 shadow-lg
                       hover:bg-gray-600/30 transition-all"
          >
            <div className="text-gray-200">
              {call.timestamp.toLocaleString()}
            </div>
            <div className="flex gap-2">
              {call.tags.map((tag, index) => {
                const colors = getRandomColorPair();
                return (
                  <span 
                    key={index} 
                    style={{
                      background: colors.background,
                      color: colors.text,
                    }}
                    className="px-2 py-1 rounded-full text-sm backdrop-blur-sm
                             border border-white/20 shadow-sm"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 text-blue-400 hover:bg-blue-900/30 rounded-full transition-colors
                          [&>*]:animate-rainbow [&>*]:stroke-2 [&>*]:fill-current"
                onClick={() => onPlay(call.id)}
              >
                <FaPlay />
              </button>
              <button
                className="p-2 text-white hover:bg-red-900/30 rounded-full transition-colors"
                onClick={() => onDelete(call.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallHistory;
