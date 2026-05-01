"use client";

import QuizEngine from '@/components/QuizEngine';

export default function QuizPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Knowledge <span className="gradient-text">Check</span></h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Test your understanding of the Indian electoral system with our interactive quiz.</p>
      </div>
      <div className="mt-16">
        <QuizEngine />
      </div>
    </div>
  );
}
