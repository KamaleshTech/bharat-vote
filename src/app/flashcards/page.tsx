"use client";

import FlashcardDeck from '@/components/FlashcardDeck';

export default function FlashcardsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Key <span className="gradient-text">Terminology</span></h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Master the election vocabulary with these interactive flashcards.</p>
      </div>
      <div className="mt-16">
        <FlashcardDeck />
      </div>
    </div>
  );
}
