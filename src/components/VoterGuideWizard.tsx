"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, UserCheck, HelpCircle, CheckCircle, Smartphone } from 'lucide-react';

const wizardSteps = [
  {
    id: 'eligibility',
    title: 'Check Eligibility',
    icon: <UserCheck size={24} />,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Are you eligible to vote?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>You must be a citizen of India.</li>
          <li>You must be 18 years of age or older on January 1st of the year the electoral roll is revised.</li>
          <li>You must be a resident of the polling area of the constituency where you want to be enrolled.</li>
          <li>You must not be disqualified from voting (e.g., due to certain criminal convictions or unsound mind).</li>
        </ul>
      </div>
    )
  },
  {
    id: 'registration',
    title: 'How to Register',
    icon: <Smartphone size={24} />,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Registering as a Voter</h3>
        <p className="text-gray-600 dark:text-gray-300">You can register online or offline. The easiest way is online:</p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Visit the <strong>National Voters' Service Portal (NVSP)</strong> or use the <strong>Voter Helpline App</strong>.</li>
          <li>Fill out <strong>Form 6</strong> for new voter registration.</li>
          <li>Upload required documents: Passport size photograph, Identity Proof, and Address Proof.</li>
          <li>Submit the form. You will receive a reference ID to track your application status.</li>
        </ol>
      </div>
    )
  },
  {
    id: 'polling_day',
    title: 'Polling Day Guide',
    icon: <CheckCircle size={24} />,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">What to do on Election Day</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Find your name on the voter slip provided by the Booth Level Officer (BLO) or check online.</li>
          <li>Carry your Voter ID (EPIC) or any other ECI-approved identity document to the polling station.</li>
          <li>Stand in the queue. The First Polling Officer will check your name and ID.</li>
          <li>The Second Polling Officer will ink your finger, give you a slip, and take your signature on a register.</li>
          <li>Deposit the slip to the Third Polling Officer, who will enable the EVM for you.</li>
          <li>Go to the voting compartment, press the blue button on the EVM against your chosen candidate, and verify your vote on the VVPAT slip.</li>
        </ol>
      </div>
    )
  },
  {
    id: 'help',
    title: 'Need Help?',
    icon: <HelpCircle size={24} />,
    content: (
      <div className="space-y-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Important Resources</h3>
        <div className="flex flex-col space-y-3 mt-6">
          <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-4 rounded-xl border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
            <strong>Voter Service Portal</strong><br/>
            <span className="text-sm">Register to vote or update details</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.eci.citizen&hl=en_IN&gl=US" target="_blank" rel="noopener noreferrer" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-xl border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
            <strong>Voter Helpline App</strong><br/>
            <span className="text-sm">Download the official app</span>
          </a>
          <div className="bg-saffron/10 text-saffron p-4 rounded-xl border border-saffron/20">
            <strong>National Toll-Free Helpline:</strong> <br/>
            <span className="text-2xl font-bold">1950</span>
          </div>
        </div>
      </div>
    )
  }
];

export default function VoterGuideWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto glass-panel rounded-2xl overflow-hidden shadow-2xl">
      {/* Progress Bar & Header */}
      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-saffron to-india-green -z-10 transform -translate-y-1/2 transition-all duration-500 ease-in-out" style={{ width: `${(currentStep / (wizardSteps.length - 1)) * 100}%` }}></div>

          {wizardSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(index)}
              aria-label={`Step ${index + 1}: ${step.title}`}
              aria-current={index === currentStep ? 'step' : undefined}
              className={`relative flex flex-col items-center group bg-white dark:bg-gray-900 ${
                index <= currentStep ? 'text-saffron' : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-gradient-to-br from-saffron to-orange-500 text-white shadow-lg scale-110' 
                  : index < currentStep
                  ? 'bg-saffron text-white'
                  : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
              }`}>
                {step.icon}
              </div>
              <span className="absolute top-12 text-xs font-medium whitespace-nowrap hidden md:block">
                {step.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-10 min-h-[300px] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {wizardSteps[currentStep].content}
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            aria-label="Previous step"
            className={`px-6 py-2.5 rounded-xl font-medium ${
              currentStep === 0 
                ? 'opacity-0 cursor-default pointer-events-none' 
                : 'btn-secondary flex items-center space-x-2'
            }`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === wizardSteps.length - 1}
            aria-label="Next step"
            className={`px-6 py-2.5 rounded-xl font-medium ${
              currentStep === wizardSteps.length - 1
                ? 'opacity-0 cursor-default pointer-events-none'
                : 'btn-primary flex items-center space-x-2'
            }`}
          >
            <span>Next Step</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
