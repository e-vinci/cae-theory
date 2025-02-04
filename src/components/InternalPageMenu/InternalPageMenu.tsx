"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToc } from "@/contexts/toc";

interface InternalPageMenuProps {
  children: React.ReactNode;
}

const InternalPageMenu = ({ children }: InternalPageMenuProps) => {
  const [menuIsHidden, setMenuIsHidden] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setHasToc } = useToc();

  useEffect(() => {
    setHasToc(true);
    return () => setHasToc(false);
  }, [setHasToc]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30); // Change position after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed w-full max-w-xl rounded-lg border bg-card text-card-foreground shadow-sm"
      initial={{
        top: "6rem",
        left: "50%",
        x: "-50%"
      }}
      animate={{
        top: isScrolled ? "1rem" : "6rem",
        left: isScrolled ? "auto" : "50%",
        right: isScrolled ? "1rem" : "auto",
        x: isScrolled ? 0 : "-50%"
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      <motion.div 
        className="flex items-center justify-between px-4 pb-2 cursor-pointer select-none hover:bg-accent transition-all"
        onClick={() => setMenuIsHidden(!menuIsHidden)}
        transition={{ duration: 0.2 }}
      >
        <h4 className="text-sm font-medium">Table of Contents</h4>
        <motion.div
          animate={{ rotate: menuIsHidden ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {!menuIsHidden && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-1">
              <nav className="space-y-1">
                {children}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InternalPageMenu;
