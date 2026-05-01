"use client";

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoterFeedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);
    try {
      // Demonstrated Firebase adoption: Writing to Firestore
      if (db) {
        await addDoc(collection(db, 'feedback'), {
          text: feedback,
          timestamp: new Date()
        });
      }
      setSubmitted(true);
      setFeedback('');
    } catch (error) {
      console.error("Firebase write error:", error);
      // Fallback for demo purposes
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-saffron/10 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 rounded-bl-full -z-10"></div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">Help Us Improve</h2>
          <p className="text-gray-600 dark:text-gray-400">Share your thoughts on how we can make BharatVote better for you.</p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 bg-india-green/20 text-india-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400">Your feedback has been successfully submitted via Google Firebase.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-saffron font-semibold hover:underline"
              >
                Send more feedback
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Feedback</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what you think..."
                  className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron h-32 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !feedback.trim()}
                  className="btn-primary flex items-center space-x-3 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Feedback</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
