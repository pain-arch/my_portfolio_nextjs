'use client';
import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
      <div 
        className="h-full bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-emerald-300 to-sky-400 opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};