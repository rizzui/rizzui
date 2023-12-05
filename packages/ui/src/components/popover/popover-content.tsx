import React from 'react';
import { usePopover } from './popover-context';
import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

const tooltipStyle = {
  base: 'z-[999] min-w-max bg-white dark:bg-gray-50 !text-gray-900 border border-muted',
  arrow: 'fill-white dark:fill-gray-50 [&>path]:stroke-gray-200',
  shadow: {
    sm: 'drop-shadow-md',
    DEFAULT: 'drop-shadow-lg',
    lg: 'drop-shadow-xl',
    xl: 'drop-shadow-2xl',
  },
  size: {
    sm: 'p-2.5',
    DEFAULT: 'p-4',
    lg: 'p-5',
    xl: 'p-6',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-md',
    DEFAULT: 'rounded-lg',
    lg: 'rounded-xl',
    pill: 'rounded-full',
  },
};

export type Shadow = keyof typeof tooltipStyle.shadow;
export type Size = keyof typeof tooltipStyle.size;
export type Rounded = keyof typeof tooltipStyle.rounded;

type PopoverContentProps = {
  children:
    | React.ReactNode
    | (({
        open,
        setOpen,
      }: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode);
  className?: string;
};

export function PopoverContent({ children, className }: PopoverContentProps) {
  const {
    open,
    setOpen,
    strategy,
    isMounted,
    x,
    y,
    refs,
    styles,
    arrowRef,
    context,
    enableOverlay,
    showArrow,
    getFloatingProps,
    size,
    shadow,
    rounded,
    arrowClassName,
    overlayClassName,
  } = usePopover();
  const isChildrenFunction = typeof children === 'function';

  return (
    <>
      {(isMounted || open) && (
        <FloatingPortal>
          {enableOverlay ? (
            <div
              className={cn(
                makeClassName(`popover-overlay`),
                'fixed inset-0 z-[998] cursor-pointer bg-black bg-opacity-60 transition-opacity duration-200',
                open ? 'bg-opacity-60 dark:bg-opacity-80' : 'opacity-0',
                overlayClassName
              )}
            >
              <span className="sr-only">popover overlay</span>
            </div>
          ) : null}

          <div
            role="popover"
            ref={refs.setFloating}
            className={cn(
              makeClassName(`popover-content`),
              tooltipStyle.base,
              size && tooltipStyle.size[size],
              rounded && tooltipStyle.rounded[rounded],
              shadow && tooltipStyle.shadow[shadow],
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
            {isChildrenFunction
              ? setOpen && children({ open, setOpen })
              : children}

            {showArrow ? (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                data-testid="popover-arrow"
                className={cn(
                  makeClassName(`popover-arrow`),
                  tooltipStyle.arrow,
                  arrowClassName
                )}
                style={{ strokeDasharray: '0,14, 5' }}
              />
            ) : null}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

PopoverContent.displayName = 'PopoverContent';
