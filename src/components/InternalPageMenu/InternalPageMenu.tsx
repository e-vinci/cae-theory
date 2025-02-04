"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InternalPageMenuProps {
  children: React.ReactNode;
}

const InternalPageMenu = ({ children }: InternalPageMenuProps) => {
  const [menuIsHidden, setMenuIsHidden] = useState(false);

  return (
    <div className="sticky top-4 w-full rounded-lg border bg-card text-card-foreground shadow-sm ">
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
            <div className="px-4 pt-1">
              <nav className="space-y-1">
                {children}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InternalPageMenu;
