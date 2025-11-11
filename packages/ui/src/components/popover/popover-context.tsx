import {
  createContext,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
  type RefObject,
  type ReactNode,
} from 'react';
import {
  type Placement,
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
  type Strategy,
} from '@floating-ui/react';
import type { Size } from './popover-content';

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
} as const;

type CommonTypes = {
  showArrow?: boolean;
  enableOverlay?: boolean;
  size?: Size;
  arrowClassName?: string;
  overlayClassName?: string;
};

type PopoverContextProps = {
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMounted: boolean;
  styles: CSSProperties;
  getReferenceProps: (userProps?: any) => Record<string, unknown>;
  getFloatingProps: (userProps?: any) => Record<string, unknown>;
  refs: any;
  x: number | null;
  y: number | null;
  strategy: Strategy;
  arrowRef: RefObject<SVGSVGElement | null>;
  context: any;
} & CommonTypes;

const PopoverContext = createContext<PopoverContextProps | null>(null);

export type PopoverProviderProps = {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  placement?: Placement;
  animation?: keyof typeof tooltipAnimation;
  gap?: number;
} & CommonTypes;

export function PopoverProvider({
  value,
  children,
}: {
  value: PopoverProviderProps;
  children: ReactNode;
}) {
  const { isOpen, setIsOpen, gap, animation, placement } = value;
  const arrowRef = useRef<SVGSVGElement | null>(null);
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
    animation
      ? {
          duration: { open: 150, close: 150 },
          ...tooltipAnimation[animation],
        }
      : undefined
  );

  return (
    <PopoverContext.Provider
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
    </PopoverContext.Provider>
  );
}

export function usePopover(): PopoverContextProps {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider');
  }
  return context;
}
