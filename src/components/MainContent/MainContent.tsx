"use client";
import { cn } from "@/lib/utils";
import { useToc } from "@/contexts/toc";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { hasToc } = useToc();

  return (
    <main className="flex-1">
      <div className={cn(
        "container max-w-7xl mx-auto p-4",
        hasToc && "pt-20"
      )}>
        {children}
      </div>
    </main>
  );
} 