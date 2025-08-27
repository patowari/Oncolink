
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignInSection from './components/SignInSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import { XIcon } from './components/Icons';

// --- LoginModal Component ---
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'doctor' | 'patient' | null;
  onNavigateToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, userType, onNavigateToRegister }) => {
  if (!isOpen) return null;

  const title = userType === 'doctor' ? 'DOCTORS & PROFESSIONALS' : 'PATIENTS & CAREGIVERS';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} aria-hidden="true"></div>
      
      <div className="relative bg-gray-100 rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md m-4 text-center transform transition-all" role="document">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" aria-label="Close modal">
          <XIcon className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold text-[#003366] mb-6 tracking-wider">{title}</h2>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input 
              type="text" 
              placeholder="LOGIN/EMAIL ID" 
              className="w-full px-4 py-3 border border-[#007ab3] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#007ab3]"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="PASSWORD" 
              className="w-full px-4 py-3 border border-[#007ab3] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#007ab3]"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#1b5e7d] text-white font-bold py-3 rounded-md hover:bg-[#134a66] transition-colors"
          >
            LOG IN
          </button>
        </form>

        <div className="mt-6 text-sm">
          <a href="#" className="text-[#007ab3] hover:underline">Forgot your password?</a>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Don't have an account? <button onClick={onNavigateToRegister} className="font-semibold text-[#007ab3] hover:underline focus:outline-none">Create Account</button>
        </div>
      </div>
    </div>
  );
};


// --- App Component ---
const App: React.FC = () => {
  const [modalState, setModalState] = useState<{isOpen: boolean; userType: 'doctor' | 'patient' | null}>({ isOpen: false, userType: null });
  const [page, setPage] = useState<'home' | 'register'>('home');

  const handleOpenModal = (userType: 'doctor' | 'patient') => {
    setModalState({ isOpen: true, userType });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, userType: null });
  };
  
  const handleNavigateToRegister = () => {
    handleCloseModal();
    setPage('register');
    window.scrollTo(0, 0);
  };

  const handleNavigateToHome = () => {
    setPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <LoginModal 
        isOpen={modalState.isOpen} 
        onClose={handleCloseModal} 
        userType={modalState.userType} 
        onNavigateToRegister={handleNavigateToRegister}
      />
      <div className={`min-h-screen flex flex-col font-sans text-gray-800 ${modalState.isOpen ? 'blur-sm' : ''} transition-filter duration-300`}>
        <div className={modalState.isOpen ? 'pointer-events-none' : ''}>
          <Header 
            onRegisterClick={handleNavigateToRegister} 
            onLogoClick={handleNavigateToHome} 
            isRegisterPage={page === 'register'} 
          />
          <main>
            {page === 'home' ? (
              <>
                <Hero />
                <SignInSection onCardClick={handleOpenModal} />
                <MainContent />
              </>
            ) : (
              <RegisterPage />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
