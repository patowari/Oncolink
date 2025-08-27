
import React from 'react';

interface SignInSectionProps {
    onCardClick: (userType: 'doctor' | 'patient') => void;
}

const SignInSection: React.FC<SignInSectionProps> = ({ onCardClick }) => {
    return (
        <section className="bg-white pt-28 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-[#007ab3] mb-8">SIGN IN</h2>
                <div className="relative w-full max-w-3xl aspect-[4/3] md:aspect-video mx-auto rounded-lg overflow-hidden shadow-2xl">
                    {/* Patients Image (Bottom layer) */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/Doctor2.jpg')" }}>
                    </div>
                    {/* Doctors Image (Top layer, clipped) */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{ 
                        backgroundImage: "url('https://uploads.onecompiler.io/42uvjq4qp/43uxmdjfx/doctor1.jpg')",
                        clipPath: 'polygon(0 0, 100% 0, 1% 100%, 0% 100%)' 
                        }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>

                    {/* Doctor Card */}
                    <button 
                        type="button" 
                        onClick={() => onCardClick('doctor')} 
                        className="absolute top-[25%] left-1/2 md:top-[40%] md:left-[30%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
                        aria-label="Sign in for doctors"
                    >
                        <div className="w-48 h-32 md:w-56 md:h-36 border border-white rounded-lg bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:scale-105">
                            <div className="text-center text-white">
                                <p className="font-light text-lg md:text-xl">FOR</p>
                                <p className="font-bold text-2xl md:text-3xl tracking-wider">DOCTORS</p>
                            </div>
                        </div>
                    </button>
                    
                    {/* Patient Card */}
                    <button 
                        type="button"
                        onClick={() => onCardClick('patient')}
                        className="absolute top-[75%] left-1/2 md:top-[60%] md:left-[70%] -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-lg"
                        aria-label="Sign in for patients"
                    >
                         <div className="w-48 h-32 md:w-56 md:h-36 border border-white rounded-lg bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20 group-hover:scale-105">
                            <div className="text-center text-white">
                                <p className="font-light text-lg md:text-xl">FOR</p>
                                <p className="font-bold text-2xl md:text-3xl tracking-wider">PATIENTS</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignInSection;
