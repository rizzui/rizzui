import React, {
  cloneElement,
  ReactElement,
  RefObject,
  useRef,
  useState,
} from 'react';
import {
  Placement,
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
  base: 'text-center z-[9999] min-w-max',
  variants: {
    size: {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-3.5 py-2 text-base',
      xl: 'px-4 py-2.5 text-base',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      pill: 'rounded-full',
    },
    shadow: {
      sm: 'drop-shadow-md',
      md: 'drop-shadow-lg',
      lg: 'drop-shadow-xl',
      xl: 'drop-shadow-2xl',
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
    { color: 'primary', class: 'text-primary-foreground bg-primary' },
    {
      color: 'invert',
      class: 'bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border border-muted',
    },
    { color: 'secondary', class: 'text-secondary-foreground bg-secondary' },
    { color: 'danger', class: 'text-white bg-red' },
    { color: 'info', class: 'text-white bg-blue' },
    { color: 'success', class: 'text-white bg-green' },
    { color: 'warning', class: 'text-white bg-orange' },
  ],
  defaultVariants: {
    size: 'md',
    rounded: 'md',
    shadow: 'md',
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
};

type TooltipVariant = VariantProps<typeof tooltip>;
type TooltipArrowVariant = VariantProps<typeof tooltipArrow>;

export type TooltipProps = {
  /** Pass children which will have tooltip */
  children: ReactElement & { ref?: RefObject<any> };
  /** Content for tooltip */
  content: React.ReactNode;
  /** Change Tooltip color */
  color?: TooltipVariant['color'];
  /** Supported Tooltip sizes are: */
  size?: TooltipVariant['size'];
  /** The rounded variants are: */
  rounded?: TooltipVariant['rounded'];
  /** Supported tooltip shadows are: */
  shadow?: TooltipVariant['shadow'];
  /** Supported Tooltip Placements are: */
  placement?: Placement;
  /** Set custom offset default is 8 */
  gap?: number;
  /** Supported Animations are: */
  animation?: keyof typeof tooltipAnimation;
  /** Add custom classes for Tooltip container or content */
  className?: string;
  /** Add custom classes for Tooltip arrow */
  arrowClassName?: string;
  /** Whether tooltip arrow should be shown or hidden */
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
  rounded = 'md',
  shadow = 'md',
  color = 'primary',
  className,
  arrowClassName,
  showArrow = true,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  const { x, y, refs, strategy, context } = useFloating({
    placement,
    open: open,
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

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({
          ref: refs.setReference,
          ...(typeof children.props === 'object' ? children.props : {}),
        })
      )}

      {(isMounted || open) && (
        <FloatingPortal>
          <div
            role="tooltip"
            ref={refs.setFloating}
            className={tooltip({ size, rounded, shadow, color, className })}
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
