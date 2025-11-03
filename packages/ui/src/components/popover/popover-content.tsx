import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { usePopover } from './popover-context';
import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

const popover = tv({
  base: 'z-[999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)]',
  variants: {
    size: {
      sm: 'p-2.5',
      md: 'p-4',
      lg: 'p-5',
    },
    shadow: {
      sm: 'drop-shadow-md',
      md: 'drop-shadow-lg',
      lg: 'drop-shadow-xl',
    },
  },
  defaultVariants: {
    size: 'md',
    shadow: 'md',
  },
});

const popoverArrow = tv({
  base: 'fill-background dark:fill-muted/80 [&>path]:stroke-muted',
});

type PopoverVariant = VariantProps<typeof popover>;

export type Shadow = PopoverVariant['shadow'];
export type Size = PopoverVariant['size'];

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
                'fixed inset-0 z-[998] cursor-pointer bg-black/60 transition-opacity duration-200',
                open ? '' : 'opacity-0',
                overlayClassName
              )}
            >
              <span className="sr-only">popover overlay</span>
            </div>
          ) : null}

          <div
            role="popover"
            ref={refs.setFloating}
            className={popover({ size, shadow, className })}
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
                className={popoverArrow({ className: arrowClassName })}
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
