import React, { createContext, useContext, useState, ReactNode } from 'react';


interface NavbarContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function Navbar({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
}