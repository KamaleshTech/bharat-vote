"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { flashcards } from '@/data/indianElectionsData';
import { ChevronLeft, ChevronRight, Rotate3D } from 'lucide-react';

export default function FlashcardDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="text-sm font-medium text-gray-500 mb-4 tracking-widest uppercase">
        Card {currentIndex + 1} of {flashcards.length}
      </div>

      {/* Flashcard Container */}
      <div 
        className="relative w-full h-80 sm:h-96 cursor-pointer group perspective-1000 focus:outline-none focus:ring-2 focus:ring-saffron rounded-2xl"
        onClick={handleFlip}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleFlip(); } }}
        tabIndex={0}
        role="button"
        aria-label={`Flashcard: ${flashcards[currentIndex].term}. Press Enter or Space to see definition.`}
        aria-live="polite"
      >
        <motion.div
          className="w-full h-full relative preserve-3d transition-transform duration-500 ease-in-out"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center p-8">
            <div className="absolute top-4 right-4 text-gray-400">
              <Rotate3D size={24} />
            </div>
            <h3 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-saffron to-orange-500">
              {flashcards[currentIndex].term}
            </h3>
            <p className="mt-8 text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest">Tap to flip</p>
          </div>

          {/* Back of card */}
          <div 
            className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center p-8"
            style={{ transform: 'rotateY(180deg)' }}
          >
             <div className="absolute top-4 right-4 text-gray-400">
              <Rotate3D size={24} />
            </div>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 leading-relaxed overflow-y-auto max-h-full scrollbar-thin">
              {flashcards[currentIndex].definition}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full mt-8 px-4">
        <button 
          onClick={handlePrev}
          aria-label="Previous flashcard"
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow text-gray-600 dark:text-gray-300 hover:text-saffron"
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <div className="flex space-x-2">
          {flashcards.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-saffron' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          aria-label="Next flashcard"
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow text-gray-600 dark:text-gray-300 hover:text-india-green"
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
      
      {/* Required CSS for 3D flip effect not available in standard tailwind classes without plugins */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}} />
    </div>
  );
}
