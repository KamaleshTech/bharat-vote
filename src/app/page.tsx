import Link from 'next/link';
import { Map, Layers, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import VoterFeedback from '@/components/VoterFeedback';

export default function Home() {
  const features = [
    {
      title: "Your Voting Journey",
      description: "A step-by-step interactive guide covering eligibility, registration, and polling day procedures.",
      icon: <Map className="text-saffron w-8 h-8" />,
      href: "/journey",
      color: "from-orange-500/20 to-saffron/20"
    },
    {
      title: "Flashcards",
      description: "Master essential election terminology like EVM, VVPAT, and Model Code of Conduct.",
      icon: <Layers className="text-india-green w-8 h-8" />,
      href: "/flashcards",
      color: "from-green-500/20 to-india-green/20"
    },
    {
      title: "Knowledge Check",
      description: "Test your understanding of the democratic process with our interactive quizzes.",
      icon: <HelpCircle className="text-blue-500 w-8 h-8" />,
      href: "/quiz",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Election Expert AI",
      description: "Ask questions and get instant answers about the post-election government formation.",
      icon: <MessageSquare className="text-purple-500 w-8 h-8" />,
      href: "/assistant",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-white dark:bg-gray-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-gray-800 flex-grow flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-saffron/15 dark:bg-saffron/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-india-green/15 dark:bg-india-green/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center mt-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-saffron/30 bg-saffron/5 text-saffron-dark dark:text-saffron-light text-sm font-semibold tracking-wide shadow-sm">
            Interactive Election Guide
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            Democracy <br />
            <span className="gradient-text drop-shadow-sm">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Your advanced guide to the world's largest democracy. Explore the timelines, test your knowledge, and ask our AI assistant anything.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {features.map((feature, idx) => (
              <Link key={idx} href={feature.href} className="glass-panel p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{feature.description}</p>
                <div className="text-saffron dark:text-saffron-light font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section - Demonstrating Google Services Adoption */}
      <VoterFeedback />

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
             <div className="flex space-x-2 mb-6">
                <div className="w-8 h-2 bg-saffron rounded-full"></div>
                <div className="w-8 h-2 bg-white rounded-full"></div>
                <div className="w-8 h-2 bg-india-green rounded-full"></div>
             </div>
             <p className="text-gray-400">
               Built to educate and empower voters. Not officially affiliated with the Election Commission of India.
             </p>
             <p className="text-gray-500 mt-2 text-sm">
               For official information, always refer to <a href="https://eci.gov.in/" className="text-saffron hover:underline" target="_blank" rel="noopener noreferrer">eci.gov.in</a>
             </p>
        </div>
      </footer>
    </div>
  );
}
