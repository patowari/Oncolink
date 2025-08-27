import React, { useState } from 'react';
import { SearchIcon, MenuIcon, XIcon } from './Icons';

const TopNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm text-gray-600 hover:text-[#003366] transition-colors">{children}</a>
);

const MainNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="py-4 text-gray-700 font-medium hover:text-[#007ab3] transition-colors">{children}</a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavLinks = [
    { href: "#", text: "Meetings & Education" },
    { href: "#", text: "Professional's Network" },
    { href: "#", text: "Practice & Patients" },
    { href: "#", text: "Blood Bank" },
    { href: "#", text: "News & Initiatives" },
    { href: "#", text: "Get Involved" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold text-[#003366]">
              ONCO<span className="font-light">LINK</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-[#007ab3] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#005f8a] transition-colors">
              Register for OncoLink
            </button>
            <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#003366]">
              Search <SearchIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <nav className="hidden lg:flex justify-center items-center space-x-8">
          {mainNavLinks.map(link => <MainNavLink key={link.text} href={link.href}>{link.text}</MainNavLink>)}
        </nav>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="p-4 flex flex-col space-y-2">
            {mainNavLinks.map(link => <a href={link.href} key={link.text} className="py-2 text-gray-700 font-medium hover:text-[#007ab3] transition-colors">{link.text}</a>)}
            <div className="border-t my-2"></div>
             <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#003366] py-2">
              Search <SearchIcon className="w-4 h-4 ml-1" />
            </a>
            <button className="w-full text-center bg-[#007ab3] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#005f8a] transition-colors mt-1">
              Register for OncoLink
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
