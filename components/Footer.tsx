import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from './Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">{children}</a>
);

const Footer: React.FC = () => {
    const secondaryLinks = [
        "BOATS Overview", "Press Center", "Blood Bank", "Awards & Recognitions",
        "Mobile Apps", "Conference Center Rental", "Association for Clinical Oncology"
    ];

    const socialIcons = [
        { href: "#", label: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
        { href: "#", label: "Twitter", icon: <TwitterIcon className="w-5 h-5" /> },
        { href: "#", label: "LinkedIn", icon: <LinkedinIcon className="w-5 h-5" /> },
        { href: "#", label: "YouTube", icon: <YoutubeIcon className="w-5 h-5" /> },
        { href: "#", label: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
    ];
    
    const legalLinks = ["Privacy Policy", "Terms of Use", "Legal"];

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-sm text-center">
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-8">
                    <a href="#" className="font-bold text-lg text-gray-800 hover:text-blue-600">About BOATS</a>
                    <a href="#" className="font-bold text-lg text-gray-800 hover:text-blue-600">Contact Us</a>
                    <a href="#" className="font-bold text-lg text-gray-800 hover:text-blue-600">Licensing</a>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-10">
                    {secondaryLinks.map(link => <FooterLink key={link} href="#">{link}</FooterLink>)}
                </div>

                <div className="flex justify-center items-center space-x-3 mb-10">
                    {socialIcons.map(social => (
                        <a key={social.label} href={social.href} aria-label={social.label} className="text-white bg-[#3b4754] hover:bg-black p-2 rounded-md transition-colors">
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 text-xs">
                     {legalLinks.map(link => <FooterLink key={link} href="#">{link}</FooterLink>)}
                </div>

                <div className="text-xs text-gray-500">
                    <p>© 2024 Bangladesh Oncology Assessment and Treatment Society (BOATS). All Rights Reserved Worldwide.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
