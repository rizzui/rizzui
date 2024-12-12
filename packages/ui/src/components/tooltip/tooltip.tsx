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
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';

const tooltipStyles = {
  base: 'text-center z-[9999] min-w-max',
  shadow: {
    sm: 'drop-shadow-md',
    md: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
  },
  size: {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-3.5 py-2 text-base',
    xl: 'px-4 py-2.5 text-base',
  },
  rounded: roundedStyles,
  arrow: {
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
  variant: {
    solid: {
      base: '',
      color: {
        primary: 'text-primary-foreground bg-primary',
        invert:
          'bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border border-muted',
        secondary: 'text-secondary-foreground bg-secondary',
        danger: 'text-white bg-red',
        info: 'text-white bg-blue',
        success: 'text-white bg-green',
        warning: 'text-white bg-orange',
      },
    },
  },
};

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

export type TooltipProps = {
  /** Pass children which will have tooltip */
  children: ReactElement & { ref?: RefObject<any> };
  /** Content for tooltip */
  // content: ({ open, setOpen }: Content) => React.ReactNode;
  content: React.ReactNode;
  /** Change Tooltip color */
  color?: keyof typeof tooltipStyles.variant.solid.color;
  /** Supported Tooltip sizes are: */
  size?: keyof typeof tooltipStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof tooltipStyles.rounded;
  /** Supported tooltip shadows are: */
  shadow?: keyof typeof tooltipStyles.shadow;
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
  /** Whether the tooltip is used as a popover component or not */
  // isPopover?: boolean;
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
            className={cn(
              makeClassName(`tooltip-content`),
              tooltipStyles.base,
              tooltipStyles.size[size],
              tooltipStyles.rounded[rounded],
              tooltipStyles.variant.solid.base,
              tooltipStyles.variant.solid.color[color],
              tooltipStyles.shadow[shadow],
              className
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
              <>
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  data-testid="tooltip-arrow"
                  className={cn(
                    makeClassName(`tooltip-arrow`),
                    tooltipStyles.arrow.color[color],
                    arrowClassName
                  )}
                  style={{ strokeDasharray: '0,14, 5' }}
                />
              </>
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

Tooltip.displayName = 'Tooltip';
