'use client';

import { useState } from 'react';
import TerminalUI from '@/components/TerminalUI';
import Dashboard from '@/components/Dashboard';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [isAppActive, setIsAppActive] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background color transition */}
      <motion.div
        animate={{ backgroundColor: isAppActive ? "#FFFFFF" : "#050505" }}
        className="fixed inset-0 z-0"
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isAppActive ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 2,
                filter: 'blur(40px)',
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
              }}
              className="absolute inset-0"
            >
              <TerminalUI onFinish={() => setIsAppActive(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full"
            >
              <Dashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
