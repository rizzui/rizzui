import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { useResizeHandler } from './drawer.lib';

const drawer = tv({
  slots: {
    root: 'fixed inset-0 z-[999] overflow-hidden',
    overlay:
      'fixed inset-0 cursor-pointer bg-black/60 duration-300 ease-in-out data-[closed]:opacity-0',
    panel: 'fixed w-full h-full bg-background duration-300 ease-out',
    resizer: 'absolute rounded-md bg-gray-400',
  },
  variants: {
    placement: {
      top: {
        panel: 'top-0 data-[closed]:-translate-y-full',
        resizer:
          'start-1/2 bottom-1 h-1.5 transition-transform duration-300 w-14 hover:scale-x-125 cursor-n-resize',
      },
      right: {
        panel: 'inset-y-0 end-0 data-[closed]:translate-x-full',
        resizer:
          'start-1 top-1/2 h-14 hover:scale-y-125 transition-transform duration-300 w-1.5 -translate-y-1/2 cursor-w-resize',
      },
      bottom: {
        panel: 'bottom-0 data-[closed]:translate-y-full',
        resizer:
          'start-1/2 -translate-x-1/2 top-1 w-14 h-1.5 transition-transform duration-300 hover:scale-x-125 cursor-n-resize',
      },
      left: {
        panel: 'inset-y-0 start-0 data-[closed]:-translate-x-full',
        resizer:
          'end-1 top-1/2 h-14 hover:scale-y-125 transition-transform duration-300 w-1.5 -translate-y-1/2 cursor-w-resize',
      },
    },
    size: {
      sm: {},
      md: {},
      lg: {},
      full: {},
    },
  },
  compoundVariants: [
    // Y-axis (top/bottom) sizes
    { placement: 'top', size: 'sm', class: { panel: 'max-h-[30%]' } },
    { placement: 'top', size: 'md', class: { panel: 'max-h-[35%]' } },
    { placement: 'top', size: 'lg', class: { panel: 'max-h-[60%]' } },
    { placement: 'top', size: 'full', class: { panel: 'max-h-full' } },
    { placement: 'bottom', size: 'sm', class: { panel: 'max-h-[30%]' } },
    { placement: 'bottom', size: 'md', class: { panel: 'max-h-[35%]' } },
    { placement: 'bottom', size: 'lg', class: { panel: 'max-h-[60%]' } },
    { placement: 'bottom', size: 'full', class: { panel: 'max-h-full' } },
    // X-axis (left/right) sizes
    { placement: 'left', size: 'sm', class: { panel: 'max-w-sm' } },
    { placement: 'left', size: 'md', class: { panel: 'max-w-md' } },
    { placement: 'left', size: 'lg', class: { panel: 'max-w-2xl' } },
    { placement: 'left', size: 'full', class: { panel: 'max-w-full' } },
    { placement: 'right', size: 'sm', class: { panel: 'max-w-sm' } },
    { placement: 'right', size: 'md', class: { panel: 'max-w-md' } },
    { placement: 'right', size: 'lg', class: { panel: 'max-w-2xl' } },
    { placement: 'right', size: 'full', class: { panel: 'max-w-full' } },
  ],
  defaultVariants: {
    placement: 'right',
    size: 'md',
  },
});

type DrawerVariant = VariantProps<typeof drawer>;

export function isPlacementOnYAxis(placement: DrawerVariant['placement']) {
  return ['top', 'bottom'].indexOf(placement as string) !== -1;
}

export type DrawerSize = DrawerVariant['size'];

export type DrawerProps = {
  /** Whether the Drawer is open or not */
  isOpen: boolean;
  /** Called when drawer is closed (Escape key and click outside, depending on options) */
  onClose(): void;
  /** Drawer can be placed on left (default), top, right and bottom. Control drawer position with placement prop: */
  placement?: DrawerVariant['placement'];
  /** Preset size of drawer is sm, md, lg, xl, full */
  size?: DrawerSize;
  /** Size prop will not work when you are using customSize prop. Here is the example of using this prop -> customSize="500px" or customSize="90%" */
  customSize?: number;
  /** Enable resizer for Drawer. This will not work if any customSize is not provided */
  enableResizer?: boolean;
  /** Override default CSS style of Drawer's overlay */
  overlayClassName?: string;
  /** Set custom style classes for the Drawer container, where you can set custom Drawer size and padding and background color */
  containerClassName?: string;
  /** Set custom style classes for the Drawer resizer */
  resizerClassName?: string;
  /** Set custom style classes for the Drawer root element */
  className?: string;
};

/**
 * Display overlay area at any side of the screen
 */
export function Drawer({
  isOpen,
  onClose,
  size = 'md',
  placement = 'right',
  customSize,
  enableResizer = false,
  overlayClassName,
  containerClassName,
  resizerClassName,
  className,
  children,
}: React.PropsWithChildren<DrawerProps>) {
  const { handleMouseDown, containerRef, width } = useResizeHandler({
    placement,
  });

  const newWidth = width !== 0 ? width : customSize;
  const { root, overlay: overlayClass, panel, resizer } = drawer({ placement, size });

  return (
    <Dialog as="aside" open={isOpen} onClose={onClose} className={root({ className })}>
      <DialogBackdrop transition className={overlayClass({ className: overlayClassName })} />
      <DialogPanel
        ref={containerRef}
        transition
        className={panel({
          className: cn(
            customSize && [
              isPlacementOnYAxis(placement)
                ? 'max-h-screen min-h-96'
                : 'max-w-full min-w-96',
            ],
            containerClassName
          ),
        })}
        {...(customSize && {
          style: {
            height: isPlacementOnYAxis(placement) ? newWidth : 'inherit',
            width: !isPlacementOnYAxis(placement) ? newWidth : '100%',
          },
        })}
      >
        {enableResizer && (
          <div onMouseDown={handleMouseDown} className={resizer({ className: resizerClassName })} />
        )}
        <>{children}</>
      </DialogPanel>
    </Dialog>
  );
}

Drawer.displayName = 'Drawer';
