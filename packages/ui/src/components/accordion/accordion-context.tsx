import {
  createContext,
  useContext,
  useRef,
  useState,
  type MutableRefObject,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from 'react';

type AccordionContextProps = {
  isOpen: boolean;
  toggle: () => void;
  targetEl: MutableRefObject<any>;
  openTargetEl: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const AccordionContext = createContext<AccordionContextProps | null>(null);

type AccordionProviderProps = {
  defaultOpen?: boolean;
  duration?: number;
  children: ReactNode;
};

export function AccordionProvider({
  defaultOpen = false,
  duration = 200,
  children,
}: AccordionProviderProps) {
  const targetEl = useRef<any>(null!);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [openTargetEl, setOpenTargetEl] = useState(defaultOpen);

  function slideUp(target: any) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.boxSizing = 'border-box';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    setIsOpen(() => false);
    // set custom delay to animated
    window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      setOpenTargetEl(() => false);
    }, duration);
  }

  function slideDown(target: any) {
    target.style.removeProperty('display');
    let { display } = window.getComputedStyle(target);
    if (display === 'none') display = 'block';
    target.style.display = display;
    const height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    setIsOpen(() => true);
    // set custom delay to animated
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      setOpenTargetEl(() => true);
    }, duration);
  }

  function toggle() {
    const target = targetEl.current;
    if (window.getComputedStyle(target).display === 'none') {
      slideDown(target);
    } else {
      slideUp(target);
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        isOpen,
        setIsOpen,
        targetEl,
        openTargetEl,
        toggle,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordion(): AccordionContextProps {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within a AccordionProvider');
  }
  return context;
}
