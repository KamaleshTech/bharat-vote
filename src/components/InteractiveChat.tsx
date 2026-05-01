"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot, HelpCircle } from 'lucide-react';

type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
};

const predefinedQuestions = [
  {
    question: "What happens after the counting of votes?",
    answer: "After the counting, the Election Commission declares the official results. The party or coalition that secures a majority of seats in the Lok Sabha (272+ out of 543) is invited by the President to form the government."
  },
  {
    question: "How is the Prime Minister chosen?",
    answer: "The elected members of the majority party or coalition in the Lok Sabha elect their leader. The President of India then officially appoints this leader as the Prime Minister."
  },
  {
    question: "What if no party gets a majority (Hung Parliament)?",
    answer: "In the case of a hung parliament, the President may invite the leader of the single largest party or a post-poll coalition to prove their majority on the floor of the house within a specified time frame."
  },
  {
    question: "What is the role of the President in government formation?",
    answer: "The President's role is crucial. They invite the leader of the majority party to form the government, administer the oath of office to the Prime Minister and the Council of Ministers, and officially convene the new session of Parliament."
  },
  {
    question: "When does the Model Code of Conduct end?",
    answer: "The Model Code of Conduct (MCC) comes to an end immediately after the Election Commission officially issues the notification containing the names of the elected members, which usually happens soon after the results are declared."
  }
];

export default function InteractiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! I am your Election Expert AI. I can answer your questions about the Indian Election Process. Ask me anything or select a suggested question!'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAskQuestion = (q: {question: string, answer: string}) => {
    const userMsg: Message = { 
      id: `user-${messages.length}-${Math.random().toString(36).substring(2, 9)}`, 
      sender: 'user', 
      text: q.question 
    };
    setMessages(prev => [...prev, userMsg]);
    
    // Simulate typing
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = { 
        id: `bot-${messages.length}-${Math.random().toString(36).substring(2, 9)}`, 
        sender: 'bot', 
        text: q.answer 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMsg: Message = { 
      id: `user-custom-${messages.length}-${Math.random().toString(36).substring(2, 9)}`, 
      sender: 'user', 
      text: inputValue 
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let responseText = "That is an excellent question! The Indian election process is vast and complex. Could you try asking about EVMs, NOTA, the Election Commission, or the Lok Sabha?";
      
      const foundPredefined = predefinedQuestions.find(q => lowerInput.includes(q.question.toLowerCase().replace('?', '')));
      
      if (foundPredefined) {
        responseText = foundPredefined.answer;
      } else if (lowerInput.includes('evm') || lowerInput.includes('voting machine')) {
        responseText = "Electronic Voting Machines (EVMs) are used in Indian elections to record votes securely. They consist of a Control Unit and a Balloting Unit.";
      } else if (lowerInput.includes('nota') || lowerInput.includes('none of the above')) {
        responseText = "NOTA stands for 'None Of The Above'. It allows voters to officially reject all candidates. However, it does not impact the election result even if it gets the maximum votes.";
      } else if (lowerInput.includes('age') || lowerInput.includes('eligible') || lowerInput.includes('vote')) {
        responseText = "Any Indian citizen who is 18 years of age or older on the qualifying date is eligible to vote in the elections.";
      } else if (lowerInput.includes('mcc') || lowerInput.includes('model code of conduct') || lowerInput.includes('code')) {
        responseText = "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission to regulate the behavior of political parties and candidates during elections.";
      } else if (lowerInput.includes('president')) {
        responseText = "The President of India is the ceremonial head of state. They appoint the Prime Minister based on which party or coalition wins the majority in the Lok Sabha.";
      } else if (lowerInput.includes('lok sabha') || lowerInput.includes('lower house') || lowerInput.includes('mp')) {
        responseText = "The Lok Sabha is the lower house of India's Parliament. Members are directly elected by the public. It currently has a maximum of 543 elected members.";
      } else if (lowerInput.includes('rajya sabha') || lowerInput.includes('upper house')) {
        responseText = "The Rajya Sabha is the upper house of India's Parliament. Members are indirectly elected by the members of the State Legislative Assemblies.";
      } else if (lowerInput.includes('election commission') || lowerInput.includes('eci') || lowerInput.includes('commissioner')) {
        responseText = "The Election Commission of India (ECI) is the autonomous constitutional authority responsible for administering election processes in India at national and state levels.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        responseText = "Hello! I am your AI assistant for learning about Indian elections. How can I help you today?";
      } else if (lowerInput.includes('pm') || lowerInput.includes('prime minister')) {
        responseText = "The Prime Minister of India is the head of government, appointed by the President. They are typically the leader of the party or coalition that holds a majority in the Lok Sabha.";
      } else if (lowerInput.includes('vvpat')) {
        responseText = "VVPAT (Voter Verifiable Paper Audit Trail) is a system that prints a paper slip when a vote is cast, allowing the voter to verify their vote before it drops into a sealed box.";
      }

      setIsTyping(false);
      const botMsg: Message = { 
        id: `bot-custom-${messages.length}-${Math.random().toString(36).substring(2, 9)}`, 
        sender: 'bot', 
        text: responseText 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row h-[600px]">
      
      {/* Sidebar with suggested questions */}
      <div className="w-full md:w-1/3 bg-gray-50/80 dark:bg-gray-800/80 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col overflow-y-auto">
        <div className="flex items-center space-x-2 mb-6 text-gray-800 dark:text-white">
          <HelpCircle size={24} className="text-saffron" />
          <h3 className="text-lg font-semibold">Suggested Questions</h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">Click a question to ask the assistant about the post-election process.</p>
        <div className="space-y-3 flex-grow">
          {predefinedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAskQuestion(q)}
              disabled={isTyping}
              className="w-full text-left p-3 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-saffron-light hover:bg-saffron/5 transition-all text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {q.question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-full md:w-2/3 flex flex-col h-full bg-white/50 dark:bg-gray-900/50">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-india-green to-teal-500 flex items-center justify-center shadow-md">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">Election Expert AI</h2>
              <p className="text-xs text-green-500 font-medium flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Online
              </p>
            </div>
          </div>
        </div>

        <div 
          className="flex-grow p-6 overflow-y-auto space-y-4"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mb-1 shadow-sm
                    ${msg.sender === 'user' ? 'ml-2 bg-saffron' : 'mr-2 bg-india-green'}
                  `}>
                    {msg.sender === 'user' ? <User size={16} className="text-white" aria-hidden="true" /> : <Bot size={16} className="text-white" aria-hidden="true" />}
                  </div>
                  <div className={`p-4 rounded-2xl shadow-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-br from-saffron to-orange-500 text-white rounded-br-sm' 
                      : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                  }`}>
                    <span className="sr-only">{msg.sender === 'user' ? 'You said:' : 'AI Assistant said:'}</span>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex justify-start"
              aria-busy="true"
              aria-label="AI is typing"
            >
               <div className="flex items-end">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-india-green flex items-center justify-center mr-2 shadow-sm">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 rounded-2xl rounded-bl-sm shadow-sm flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
               </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <form onSubmit={handleCustomSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask the expert..."
              className="flex-grow p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-saffron text-gray-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              className="p-3 bg-gradient-to-r from-saffron to-india-green text-white rounded-xl shadow-md disabled:opacity-50 hover:shadow-lg transition-all"
            >
              <Send size={20} aria-hidden="true" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
