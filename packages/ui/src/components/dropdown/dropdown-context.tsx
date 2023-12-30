import React, { createContext, useContext } from 'react';
import { type Strategy } from '@floating-ui/react';

type DropdownContextProps = {
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  refs?: any;
  x?: number;
  y?: number;
  strategy?: Strategy;
  inPortal?: boolean;
};

const DropdownContext = createContext<DropdownContextProps | null>(null);

export function DropdownProvider({
  value,
  children,
}: React.PropsWithChildren<{ value: DropdownContextProps }>) {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}

export const useDropdown = (): DropdownContextProps => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};
