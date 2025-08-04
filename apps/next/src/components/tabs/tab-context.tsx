import React, { createContext, useContext } from 'react';

type Rect = {
  top: number;
  left: number;
  right: number;
  width: number;
  height: number;
  elementTop: number;
};

type TabContextProps = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  rect: Rect;
  setRect: (
    eventOrRef:
      | React.MouseEvent<HTMLElement>
      | React.FocusEvent<HTMLElement>
      | React.MutableRefObject<HTMLElement | null>,
    getContainer?: () => HTMLElement | null
  ) => void;
  vertical?: boolean;
  hideHoverAnimation?: boolean;
  displayHighlight?: boolean;
  setDisplayHighlight?: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab?: number;
  highlightClassName?: string;
};

const TabContext = createContext<TabContextProps | null>(null);

export function TabProvider({
  value,
  children,
}: React.PropsWithChildren<{ value: TabContextProps }>) {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export const useTab = (): TabContextProps => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};
