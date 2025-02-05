"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, GlobeAltIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Banner from './banner';

interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
}

const SideNav: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const navItems: NavItem[] = [
    { path: '/', label: 'Home', icon: <HomeIcon className="h-6 w-6" /> },
    { path: '/explore', label: 'Explore', icon: <GlobeAltIcon className="h-6 w-6" /> },
    { path: '/profile', label: 'Profile', icon: <UserIcon className="h-6 w-6" /> },
    { path: '/settings', label: 'Settings', icon: <Cog6ToothIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="flex min-h-screen p-4">
      <div className="flex flex-col w-full rounded-3xl overflow-hidden border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-md backdrop-saturate-150 shadow-xl animate-slide-in">
        <div className="flex justify-center">
          <div className="w-[1500px] p-4">
            <Banner />
          </div>
        </div>
        <div className="flex flex-1 overflow-hidden">
          <nav className={`relative transition-all duration-300 p-6 space-y-8
            ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center mb-8">
              <h1 className={`text-2xl font-bold text-white transition-opacity duration-300 
                ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                {!isCollapsed && 'Yapper'}
              </h1>
            </div>

            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center rounded-lg transition-all duration-200
                               ${isCollapsed ? 'px-2 py-3' : 'px-4 py-3'}
                               ${pathname === item.path
                                 ? 'text-white'
                                 : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                               }`}
                  >
                    {item.icon && (
                      <span 
                        className={`mr-3 ${
                          pathname === item.path ? '[&>*]:animate-rainbow [&>*]:stroke-2' : ''
                        }`}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className={`transition-opacity duration-300 
                      ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute bottom-4 right-[-16px] p-1 rounded-full bg-gray-800/50 
                         hover:bg-gray-700/50 transition-all duration-200"
            >
              {isCollapsed ? (
                <ChevronRightIcon className="h-6 w-6 text-white" />
              ) : (
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </nav>
          <div className="w-[1px] bg-gray-800"></div>
          <div className="flex-1 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
