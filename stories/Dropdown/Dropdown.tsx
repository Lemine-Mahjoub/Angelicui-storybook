import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedOption: string | null;
  setSelectedOption: (value: string) => void;
  onSelect: (value: any) => void;
}

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

interface DropdownProps {
  children: ReactNode;
  onSelect: (value: any) => void;
}

export function Dropdown({ children, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedOption]);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedOption,
        setSelectedOption,
        onSelect
      }}
    >
      <div className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a Dropdown component');
  }
  return context;
}
