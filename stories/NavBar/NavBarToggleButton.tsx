import React, { ReactNode } from 'react';
import { useNavbar } from './Navbar';

export function NavBarToggleButton({ children }: { children: ReactNode }) {
  const { isOpen, setIsOpen } = useNavbar();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return <button onClick={handleClick}>{children}</button>;
}