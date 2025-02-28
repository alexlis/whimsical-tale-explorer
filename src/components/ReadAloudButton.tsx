
import React from 'react';
import { VoiceIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReadAloudButtonProps {
  title: string;
}

const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({ title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center rounded-full px-6 py-3 bg-secondary text-white font-bubblegum shadow-lg transition-colors hover:bg-secondary/90"
    >
      <VoiceIcon className="w-5 h-5 mr-2" />
      <span>Read Aloud</span>
    </motion.button>
  );
};

export default ReadAloudButton;
