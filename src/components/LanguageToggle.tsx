import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'zh' | 'en';
  onLanguageChange: (lang: 'zh' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
        <button
          onClick={() => onLanguageChange('zh')}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'zh'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          English
        </button>
        <Globe className="w-4 h-4 text-gray-400 ml-2 mr-1" />
      </div>
    </motion.div>
  );
};

export default LanguageToggle; 