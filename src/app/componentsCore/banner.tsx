"use client"

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface BannerProps {
  message?: string;
}

const Banner: React.FC<BannerProps> = ({ message = "Welcome to Yapper! 🎉" }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-sky-500/10 backdrop-blur-md backdrop-saturate-150 border-b border-sky-200/20 rounded-xl">
      <div className="max-w-xl mx-auto py-3 px-12">
        <div className="flex items-center justify-center relative">
          <p className="text-sm text-sky-200/80 text-center">
            {message}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-lg p-1 hover:bg-sky-400/20 transition-colors duration-200 absolute right-[-40px]"
          >
            <XMarkIcon className="h-5 w-5 text-sky-200/80" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
