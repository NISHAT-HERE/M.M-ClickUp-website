'use client';

import { useState } from 'react';
import MobileSidebar from './MobileSidebar';


interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const openMobileSidebar = () => setIsMobileSidebarOpen(true);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);

  return (
    <div className="relative">
     
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={closeMobileSidebar}
        onOpen={openMobileSidebar}
      />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default AppLayout; 