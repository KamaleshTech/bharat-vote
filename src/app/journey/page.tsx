"use client";

import VoterGuideWizard from '@/components/VoterGuideWizard';
import Timeline from '@/components/Timeline';

export default function JourneyPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      <section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Your Voting <span className="gradient-text">Journey</span></h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Follow this step-by-step guide to ensure you are ready for polling day.</p>
        </div>
        <VoterGuideWizard />
      </section>

      <section className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Election Timeline</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From announcement to results, understand the key phases of the Lok Sabha and Vidhan Sabha elections.</p>
        </div>
        <Timeline />
      </section>
    </div>
  );
}
