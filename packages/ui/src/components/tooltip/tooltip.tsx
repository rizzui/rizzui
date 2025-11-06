import { useRef, useState, type ReactElement, type ReactNode } from 'react';
import {
  type Placement,
  FloatingArrow,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  arrow,
  useTransitionStyles,
  FloatingPortal,
} from '@floating-ui/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const tooltip = tv({
  base: 'text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]',
  variants: {
    size: {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-3.5 py-2 text-base',
    },
    color: {
      primary: '',
      invert: '',
      secondary: '',
      danger: '',
      info: '',
      success: '',
      warning: '',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      class: 'text-primary-foreground bg-primary border-transparent',
    },
    {
      color: 'invert',
      class:
        'bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-border',
    },
    {
      color: 'secondary',
      class: 'text-secondary-foreground bg-secondary border-transparent',
    },
    { color: 'danger', class: 'text-white bg-red border-transparent' },
    { color: 'info', class: 'text-white bg-blue border-transparent' },
    { color: 'success', class: 'text-white bg-green border-transparent' },
    { color: 'warning', class: 'text-white bg-orange border-transparent' },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

const tooltipArrow = tv({
  variants: {
    color: {
      primary: 'fill-primary',
      invert:
        'fill-background dark:fill-muted/80 [&>path]:stroke-muted dark:backdrop-blur-3xl',
      secondary: 'fill-secondary',
      danger: 'fill-red',
      info: 'fill-blue',
      success: 'fill-green',
      warning: 'fill-orange',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

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

type TooltipVariant = VariantProps<typeof tooltip>;

export type TooltipProps = {
  children: ReactElement;
  content: ReactNode;
  color?: TooltipVariant['color'];
  size?: TooltipVariant['size'];
  placement?: Placement;
  gap?: number;
  animation?: keyof typeof tooltipAnimation;
  className?: string;
  arrowClassName?: string;
  showArrow?: boolean;
};

/**
 * Tooltip displays informative text when users hover, focus, or click an element.
 * Here is the API documentation of the Tooltip component.
 * You can use the following props to create a demo of tooltip.
 */
export function Tooltip({
  children,
  content,
  gap = 8,
  animation = 'zoomIn',
  placement = 'top',
  size = 'md',
  color = 'primary',
  className,
  arrowClassName,
  showArrow = true,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement | null>(null);

  const { x, y, refs, strategy, context } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    middleware: [
      arrow({ element: arrowRef }),
      offset(gap),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useFocus(context),
    useRole(context, { role: 'tooltip' }),
    useDismiss(context),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: { open: 150, close: 150 },
    ...tooltipAnimation[animation],
  });

  const child = children as ReactElement<any>;
  const triggerProps = getReferenceProps({
    ref: refs.setReference,
    ...child.props,
  });

  return (
    <>
      <child.type {...triggerProps} />

      {(isMounted || open) && (
        <FloatingPortal>
          <div
            role="tooltip"
            ref={refs.setFloating}
            className={cn(
              makeClassName('tooltip'),
              tooltip({ size, color, className })
            )}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            {...getFloatingProps()}
          >
            {content}

            {showArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                data-testid="tooltip-arrow"
                className={tooltipArrow({ color, className: arrowClassName })}
                style={{ strokeDasharray: '0,14, 5' }}
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

Tooltip.displayName = 'Tooltip';
