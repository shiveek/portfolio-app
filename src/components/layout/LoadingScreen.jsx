import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
    >
      <div className="flex flex-col items-center gap-6 max-w-xs w-full px-6">
        
        <motion.div
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-0.5 shadow-xl shadow-primary/30"
        >
          <div className="w-full h-full bg-[#020617] rounded-[14px] flex items-center justify-center">
            <Code2 className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>

        <div className="text-center space-y-1">
          <h2 className="font-display font-bold text-xl text-textMain tracking-tight">
            Boda Shiva Shankar
          </h2>
          <p className="text-xs text-textMuted font-mono">
            Loading Engineering Portfolio... {progress}%
          </p>
        </div>

        <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
