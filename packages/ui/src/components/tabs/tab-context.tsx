import {
  createContext,
  useContext,
  type MutableRefObject,
  type MouseEvent,
  type FocusEvent,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from 'react';

type Rect = {
  top: number;
  left: number;
  right: number;
  width: number;
  height: number;
  elementTop: number;
};

type TabContextProps = {
  ref: MutableRefObject<HTMLDivElement | null>;
  rect: Rect;
  setRect: (
    eventOrRef:
      | MouseEvent<HTMLElement>
      | FocusEvent<HTMLElement>
      | MutableRefObject<HTMLElement | null>,
    getContainer?: () => HTMLElement | null
  ) => void;
  vertical?: boolean;
  hideHoverAnimation?: boolean;
  displayHighlight?: boolean;
  setDisplayHighlight?: Dispatch<SetStateAction<boolean>>;
  activeTab?: number;
  highlightClassName?: string;
};

const TabContext = createContext<TabContextProps | null>(null);

export function TabProvider({
  value,
  children,
}: {
  value: TabContextProps;
  children: ReactNode;
}) {
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export function useTab(): TabContextProps {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
}
