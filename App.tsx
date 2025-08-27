
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignInSection from './components/SignInSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <SignInSection />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
