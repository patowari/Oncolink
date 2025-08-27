
import React from 'react';
import { SearchIcon, ChevronDownIcon, ChevronRightIcon } from './Icons';

const HeroButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-md shadow-md transition-all duration-300 flex justify-between items-center text-left w-full">
    <span>{children}</span>
    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
  </a>
);

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/Doctor2.jpg')" }}>
      <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <p className="text-sm md:text-base font-semibold tracking-wider">WELCOME TO BOATS - WHERE</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">Understanding Defeats Cancer</h1>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-md shadow-lg p-2">
            <button className="flex items-center text-gray-600 px-4 py-2 border-r border-gray-300 whitespace-nowrap">
              All Categories <ChevronDownIcon className="w-4 h-4 ml-2" />
            </button>
            <input
              type="text"
              placeholder="Search for abstracts, articles, news and more"
              className="w-full px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md ml-2">
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative -bottom-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <HeroButton>TYPES OF CANCER</HeroButton>
          <HeroButton>NAVIGATING CANCER CARE</HeroButton>
          <HeroButton>UPCOMING ONCOLOGY EVENT & SEMINAR'S</HeroButton>
          <HeroButton>RESEARCH AND ADVOCACY</HeroButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
