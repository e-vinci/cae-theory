"use client";
import React, { createContext, useContext, useState } from "react";

interface TocContextType {
  hasToc: boolean;
  setHasToc: (value: boolean) => void;
}

const TocContext = createContext<TocContextType | undefined>(undefined);

export function TocProvider({ children }: { children: React.ReactNode }) {
  const [hasToc, setHasToc] = useState(false);

  return (
    <TocContext.Provider value={{ hasToc, setHasToc }}>
      {children}
    </TocContext.Provider>
  );
}

export function useToc() {
  const context = useContext(TocContext);
  if (context === undefined) {
    throw new Error("useToc must be used within a TocProvider");
  }
  return context;
} 