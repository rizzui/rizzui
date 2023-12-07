import React, { createContext, useContext, useRef, useState } from 'react';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useClick,
  useDismiss,
  useRole,
  arrow,
  useTransitionStyles,
  Strategy,
} from '@floating-ui/react';
import { type Size, type Shadow, type Rounded } from './popover-content';

const tooltipAnimation = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    close: {
      opacity: 0,
    },
  },
  zoomIn: {
    initial: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    close: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
  },
  slideIn: {
    initial: {
      opacity: 0,
      transform: 'translateY(4px)',
    },
    close: {
      opacity: 0,
      transform: 'translateY(4px)',
    },
  },
};

type CommonTypes = {
  showArrow?: boolean;
  enableOverlay?: boolean;
  size?: Size;
  shadow?: Shadow;
  rounded?: Rounded;
  arrowClassName?: string;
  overlayClassName?: string;
};

type PopoverContextProps = {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMounted: boolean;
  styles: React.CSSProperties;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element> | undefined,
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement> | undefined,
  ) => Record<string, unknown>;
  refs: any;
  x: number;
  y: number;
  strategy: Strategy;
  arrowRef: React.MutableRefObject<SVGSVGElement | null>;
  context: any;
} & CommonTypes;

const AccordionContext = createContext<PopoverContextProps | null>(null);

export type PopoverProviderProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  placement?: Placement;
  animation?: keyof typeof tooltipAnimation;
  gap?: number;
} & CommonTypes;

export function PopoverProvider({
  value,
  children,
}: React.PropsWithChildren<{ value: PopoverProviderProps }>) {
  const { isOpen, setIsOpen, gap, animation, placement } = value;
  const arrowRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { x, y, refs, strategy, context } = useFloating({
    placement,
    open: isOpen ?? open,
    onOpenChange: setIsOpen ?? setOpen,
    middleware: [
      arrow({ element: arrowRef }),
      offset(gap),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
    useClick(context, { enabled: true }),
  ]);

  const { isMounted, styles } = useTransitionStyles(
    context,
    animation && {
      duration: { open: 150, close: 150 },
      ...tooltipAnimation[animation],
    },
  );

  return (
    <AccordionContext.Provider
      value={{
        open: isOpen ?? open,
        setOpen: setIsOpen ?? setOpen,
        isMounted,
        styles,
        getReferenceProps,
        getFloatingProps,
        x,
        y,
        refs,
        strategy,
        arrowRef,
        context,
        ...value,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export const usePopover = (): PopoverContextProps => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider');
  }
  return context;
};
