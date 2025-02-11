import React from 'react';

interface PathViewerProps {
  children: React.ReactNode;
}

const PathViewer = ({ children }: PathViewerProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {children}
      </ol>
    </nav>
  );
};

export default PathViewer;
