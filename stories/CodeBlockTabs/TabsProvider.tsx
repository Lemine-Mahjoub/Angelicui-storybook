import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useCodeBlock } from '../CodeBlock/CodeBlock';

interface TabsContextType {
  activeTab: number;
  setActiveTab: (tab: number) => void;
  tabs: string[];
  setTabs: (tabs: string[]) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function TabsProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<string[]>([]);



  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabs, setTabs }}>
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
}
