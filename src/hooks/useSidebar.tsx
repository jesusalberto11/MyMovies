import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  };
};
