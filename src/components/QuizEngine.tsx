"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { quizQuestions } from '@/data/indianElectionsData';

export default function QuizEngine() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel rounded-2xl p-6 md:p-8">
      {showResults ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Quiz Completed!</h2>
          <div className="w-32 h-32 mx-auto rounded-full border-8 flex items-center justify-center mb-6 border-saffron-light">
            <span className="text-4xl font-bold text-saffron">{score}/{quizQuestions.length}</span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {score === quizQuestions.length ? "Perfect! You know your Indian elections well." : "Great effort! Keep learning about the democratic process."}
          </p>
          <button
            onClick={resetQuiz}
            className="btn-primary flex items-center justify-center mx-auto space-x-2 px-8 py-3.5 rounded-full font-semibold text-lg"
          >
            <RotateCcw size={20} />
            <span>Try Again</span>
          </button>
        </motion.div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium bg-saffron text-white px-3 py-1 rounded-full">
              Score: {score}
            </span>
          </div>

          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQuestion.answer;
                const showCorrect = isAnswered && isCorrect;
                const showIncorrect = isAnswered && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(option)}
                    aria-label={`Option ${index + 1}: ${option}`}
                    aria-pressed={isSelected}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                        : isSelected
                        ? 'border-saffron bg-saffron/10'
                        : 'border-gray-200 dark:border-gray-700 hover:border-saffron-light bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{option}</span>
                    {showCorrect && <CheckCircle2 className="text-green-500" size={20} aria-hidden="true" />}
                    {showIncorrect && <XCircle className="text-red-500" size={20} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  role="alert"
                  aria-live="polite"
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800"
                >
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Explanation:</strong> {currentQuestion.explanation}
                  </p>
                  <div className="mt-5 flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      aria-label={currentQuestionIndex < quizQuestions.length - 1 ? 'Go to next question' : 'Finish and see results'}
                      className="btn-primary flex items-center space-x-1 px-5 py-2.5 rounded-xl font-medium"
                    >
                      <span>{currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}</span>
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </div>
  );
}
