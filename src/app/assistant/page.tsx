"use client";

import InteractiveChat from '@/components/InteractiveChat';

export default function AssistantPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Election <span className="gradient-text">Expert AI</span></h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Ask questions about the Indian Election process, from registration to results.</p>
      </div>
      <div className="mt-8">
        <InteractiveChat />
      </div>
    </div>
  );
}
