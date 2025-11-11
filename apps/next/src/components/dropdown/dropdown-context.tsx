import { createContext, useContext, type ReactNode } from 'react';
import type { TheirPlacementType } from './dropdown.lib';

type DropdownContextProps = {
  inPortal?: boolean;
  placement: TheirPlacementType;
  gap?: number;
  modal?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
};

const DropdownContext = createContext<DropdownContextProps | null>(null);

export function DropdownProvider({
  value,
  children,
}: {
  value: DropdownContextProps;
  children: ReactNode;
}) {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown(): DropdownContextProps {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
}
