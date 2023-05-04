'use client';

import React, { cloneElement, RefObject, useRef, useState } from 'react';
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
  useClick,
  useDismiss,
  arrow,
  useTransitionStyles,
} from '@floating-ui/react';

import { cn } from '../../lib/cn';

const tooltipClasses = {
  base: 'text-center z-40 min-w-max',
  shadow: {
    sm: 'drop-shadow-md',
    DEFAULT: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
  },
  size: {
    sm: 'px-2.5 py-1 text-xs',
    DEFAULT: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2 text-base',
    xl: 'px-6 py-2.5 text-lg',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-md',
    DEFAULT: 'rounded-xl',
    lg: 'rounded-2xl',
    pill: 'rounded-full',
  },
  arrow: {
    color: {
      DEFAULT: 'fill-gray-900',
      invert: 'fill-gray-0 [&>path]:stroke-gray-300',
      primary: 'fill-primary',
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
        DEFAULT: 'text-gray-0 bg-gray-900',
        invert: 'bg-gray-0 !text-gray-900 border border-gray-300',
        primary: 'text-white bg-primary',
        secondary: 'text-white bg-secondary',
        danger: 'text-white bg-red',
        info: 'text-white bg-blue',
        success: 'text-white bg-green',
        warning: 'text-white bg-orange',
      },
    },
  },
};

export type TooltipProps = {
  /** Pass open state to open the floating element */
  isOpen?: boolean;
  /** Pass setOpen to set open value */
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  /** Pass children which will have tooltip */
  children: JSX.Element & { ref?: RefObject<any> };
  /** Content for tooltip */
  content: React.ReactNode;
  /** Change Tooltip color */
  color?: keyof typeof tooltipClasses.variant.solid.color;
  /** Supported Tooltip sizes are: */
  size?: keyof typeof tooltipClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof tooltipClasses.rounded;
  /** Supported tooltip shadows are: */
  shadow?: keyof typeof tooltipClasses.shadow;
  /** Supported Tooltip Placements are: */
  placement?: Placement;
  /** Add custom classes for Tooltip container or content */
  className?: string;
  /** Add custom classes for Tooltip arrow */
  tooltipArrowClassName?: string;
  /** Whether tooltip arrow should be shown or hidden */
  showArrow?: boolean;
  /** Whether the tooltip is used as a pop-confirm component */
  isPopconfirm?: boolean;
};

/**
 * Tooltip displays informative text when users hover, focus, or click an element.
 * Here is the API documentation of the Tooltip component.
 * You can use the following props to create a demo of tooltip.
 */
export default function Tooltip({
  isOpen,
  setIsOpen,
  children,
  content = 'This is a tooltip',
  placement = 'bottom',
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  shadow = 'DEFAULT',
  color = 'DEFAULT',
  className,
  tooltipArrowClassName,
  showArrow = true,
  isPopconfirm = false,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  const { x, y, refs, strategy, context } = useFloating({
    placement,
    open: isOpen ?? open,
    onOpenChange: setIsOpen ?? setOpen,
    middleware: [
      arrow({ element: arrowRef }),
      offset(8),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, { enabled: !isPopconfirm }),
    useFocus(context),
    useDismiss(context),
    useClick(context, { enabled: isPopconfirm }),
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: { open: 200, close: 200 },
    initial: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
    close: {
      opacity: 0,
      transform: 'scale(0.96)',
    },
  });

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props })
      )}
      {(isMounted || (isOpen ?? open)) && (
        <div
          role="tooltip"
          ref={refs.setFloating}
          className={cn(
            tooltipClasses.base,
            tooltipClasses.size[size],
            tooltipClasses.rounded[rounded],
            tooltipClasses.variant.solid.base,
            tooltipClasses.variant.solid.color[color],
            tooltipClasses.shadow[shadow],
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
                  tooltipClasses.arrow.color[color],
                  tooltipArrowClassName
                )}
                style={{ strokeDasharray: '0,14, 5' }}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}

Tooltip.displayName = 'Tooltip';
