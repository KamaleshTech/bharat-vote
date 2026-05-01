"use client";

import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/indianElectionsData';
import { Calendar, FileText, Search, XCircle, Megaphone, CheckSquare, BarChart, Award } from 'lucide-react';

// Map string icon names to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-6 h-6 text-white" />,
  FileText: <FileText className="w-6 h-6 text-white" />,
  Search: <Search className="w-6 h-6 text-white" />,
  XCircle: <XCircle className="w-6 h-6 text-white" />,
  Megaphone: <Megaphone className="w-6 h-6 text-white" />,
  CheckSquare: <CheckSquare className="w-6 h-6 text-white" />,
  BarChart: <BarChart className="w-6 h-6 text-white" />,
  Award: <Award className="w-6 h-6 text-white" />,
};

export default function Timeline() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative border-l-4 border-saffron-light dark:border-saffron/50 ml-6 md:ml-12">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12 relative"
          >
            {/* Timeline dot/icon */}
            <div className="absolute -left-10 md:-left-16 mt-1.5 w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-india-green border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center transform -translate-x-1/2">
               {iconMap[event.icon] || <Calendar className="w-6 h-6 text-white" />}
            </div>

            {/* Content Card */}
            <div className="ml-8 md:ml-12 glass-panel rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                  {event.title}
                </h3>
                <span className="text-sm font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  Step {index + 1}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
