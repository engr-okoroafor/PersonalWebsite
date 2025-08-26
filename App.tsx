
import React, { Suspense } from 'react';
import Header from './components/layout/Header.tsx';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import Skills from './components/sections/Skills.tsx';
import Experience from './components/sections/Experience.tsx';
import Projects from './components/sections/Projects.tsx';
import Contact from './components/sections/Contact.tsx';
import Footer from './components/layout/Footer.tsx';
import ThreeScene from './components/three/Scene.tsx';
import BackToTopButton from './components/ui/BackToTopButton.tsx';
import ChatWidget from './components/ui/ChatWidget.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-base" />}>
           <ThreeScene />
        </Suspense>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTopButton />
      <ChatWidget />
    </div>
  );
};

export default App;