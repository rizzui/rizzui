import type { ReactNode, Dispatch, SetStateAction } from 'react';
import { createVariant, type VariantProps } from '../../lib/variants';
import { usePopover } from './popover-context';
import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import { cn } from '../../lib/cn';

const popover = createVariant({
  base: 'z-9999 min-w-max bg-background border-(length:--border-width) border-border rounded-(--border-radius) shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.2)]',
  variants: {
    size: {
      sm: 'p-2.5',
      md: 'p-4',
      lg: 'p-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const popoverArrow = createVariant({
  base: 'fill-background dark:fill-muted/80 [&>path]:stroke-muted',
});

type PopoverVariant = VariantProps<typeof popover>;

export type Size = PopoverVariant['size'];

type PopoverContentProps = {
  children:
    | ReactNode
    | (({
        open,
        setOpen,
      }: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
      }) => ReactNode);
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
    arrowClassName,
    overlayClassName,
  } = usePopover();

  if (!isMounted && !open) return null;

  const renderChildren = (): ReactNode => {
    if (typeof children === 'function' && setOpen) {
      return children({ open, setOpen });
    }
    return children as ReactNode;
  };

  return (
    <FloatingPortal>
      {enableOverlay && (
        <div
          className={cn(
            'rizzui-popover-overlay',
            'fixed inset-0 z-9998 cursor-pointer bg-black/60 transition-opacity duration-200',
            !open && 'opacity-0',
            overlayClassName
          )}
        >
          <span className="sr-only">popover overlay</span>
        </div>
      )}

      <div
        role="popover"
        ref={refs.setFloating}
        className={popover({ size, className })}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          ...styles,
        }}
        {...getFloatingProps()}
      >
        {renderChildren()}

        {showArrow && (
          <FloatingArrow
            ref={arrowRef}
            context={context}
            data-testid="popover-arrow"
            className={popoverArrow({ className: arrowClassName })}
            style={{ strokeDasharray: '0,14, 5' }}
          />
        )}
      </div>
    </FloatingPortal>
  );
}

PopoverContent.displayName = 'PopoverContent';
