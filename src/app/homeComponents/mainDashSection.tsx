'use client';

import React from 'react';
import { Component as RadialChart } from './charts/radialChart';
import { Component as PieChart } from './charts/pieChart';
import { Component as AreaChart } from './charts/areaChart';
import { Component as BarChart } from './charts/barChart';
import CallHistory from './calls/callHistory';

const MainDashSection = () => {
  // Mock data for CallHistory
  const mockCalls = [
    {
      id: '1',
      timestamp: new Date('2024-03-20T10:30:00'),
      tags: ['Important', 'Meeting'],
      audioUrl: '/audio/1.mp3'
    },
    {
      id: '2',
      timestamp: new Date('2024-03-19T15:45:00'),
      tags: ['Follow-up', 'Client'],
      audioUrl: '/audio/2.mp3'
    },
    {
      id: '3',
      timestamp: new Date('2024-03-19T09:15:00'),
      tags: ['Sales', 'Demo'],
      audioUrl: '/audio/3.mp3'
    },
    {
      id: '4',
      timestamp: new Date('2024-03-18T14:20:00'),
      tags: ['Internal', 'Team'],
      audioUrl: '/audio/4.mp3'
    }
  ];

  return (
    <div className="flex flex-col gap-8 p-8 w-full h-full">
      {/* Top row - 3 smaller boxes */}
      <div className="flex gap-4 w-full">
        {[1, 2, 3].map((boxNum) => (
          <div 
            key={boxNum}
            className="flex-1 bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-gray-800/10 min-h-[200px]
                     animate-slide-in hover:bg-black/30 transition-all duration-300"
            style={{ animationDelay: `${boxNum * 100}ms` }}
          >
            {boxNum === 1 ? (
              <PieChart />
            ) : boxNum === 2 ? (
              <AreaChart />
            ) : (
              <BarChart />
            )}
          </div>
        ))}
      </div>

      {/* Bottom row - 2 larger boxes */}
      <div className="flex gap-4 w-full h-full">
        {[1, 2].map((boxNum) => (
          <div 
            key={boxNum}
            className="flex-1 bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-gray-800/10
                     animate-slide-in hover:bg-black/30 transition-all duration-300"
            style={{ animationDelay: `${(boxNum + 3) * 100}ms` }}
          >
            {boxNum === 1 ? (
              <CallHistory 
                calls={mockCalls}
                onPlay={(id) => console.log('Play:', id)}
                onDelete={(id) => console.log('Delete:', id)}
              />
            ) : (
              `Large Box ${boxNum}`
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDashSection;
