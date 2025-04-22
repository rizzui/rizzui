import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { useResizeHandler } from './drawer.lib';

export const drawerClasses = {
  panel: 'fixed w-full h-full bg-background duration-300 ease-out',
  overlay:
    'fixed inset-0 cursor-pointer bg-black/60 duration-300 ease-in-out data-[closed]:opacity-0',
  placement: {
    top: 'data-[closed]:-translate-y-full',
    right: 'data-[closed]:translate-x-full',
    bottom: 'data-[closed]:translate-y-full',
    left: 'data-[closed]:-translate-x-full',
  },
  position: {
    top: 'top-0',
    right: 'inset-y-0 end-0',
    bottom: 'bottom-0',
    left: 'inset-y-0 start-0',
  },
  // -> when placement is set to top | bottom
  sizeOfYAxisDrawer: {
    sm: 'max-h-[30%]',
    md: 'max-h-[35%]',
    lg: 'max-h-[60%]',
    xl: 'max-h-[80%]',
    full: 'max-h-full',
  },
  // -> when placement is set to left | right
  sizeOfXAxisDrawer: {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-[60%]',
    full: 'max-w-full',
  },
  resizeHandlerPlacement: {
    top: 'start-1/2 bottom-1 h-1.5 transition-transform duration-300 w-14 hover:scale-x-125 cursor-n-resize',
    right:
      'start-1 top-1/2 h-14 hover:scale-y-125 transition-transform duration-300 w-1.5 -translate-y-1/2 cursor-w-resize',
    bottom:
      'start-1/2 -translate-x-1/2 top-1 w-14 h-1.5 transition-transform duration-300 hover:scale-x-125 cursor-n-resize',
    left: 'end-1 top-1/2 h-14 hover:scale-y-125 transition-transform duration-300 w-1.5 -translate-y-1/2 cursor-w-resize',
  },
};

export function isPlacementOnYAxis(
  placement: keyof typeof drawerClasses.placement
) {
  return ['top', 'bottom'].indexOf(placement) !== -1;
}

export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type DrawerProps = {
  /** Whether the Drawer is open or not */
  isOpen: boolean;
  /** Called when drawer is closed (Escape key and click outside, depending on options) */
  onClose(): void;
  /** Drawer can be placed on left (default), top, right and bottom. Control drawer position with placement prop: */
  placement?: keyof typeof drawerClasses.placement;
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

  return (
    <Dialog
      as="aside"
      open={isOpen}
      onClose={onClose}
      className={cn(
        makeClassName(`drawer-root`),
        'fixed inset-0 z-[999] overflow-hidden',
        className
      )}
    >
      <DialogBackdrop
        transition
        className={cn(
          makeClassName(`drawer-overlay`),
          drawerClasses.overlay,
          overlayClassName
        )}
      />
      <DialogPanel
        ref={containerRef}
        transition
        className={cn(
          makeClassName(`drawer-container`),
          drawerClasses.panel,
          drawerClasses.position[placement],
          drawerClasses.placement[placement],
          customSize && [
            isPlacementOnYAxis(placement)
              ? 'max-h-screen min-h-96'
              : 'max-w-full min-w-96',
          ],
          !customSize && [
            isPlacementOnYAxis(placement)
              ? drawerClasses.sizeOfYAxisDrawer[size]
              : drawerClasses.sizeOfXAxisDrawer[size],
          ],
          containerClassName
        )}
        {...(customSize && {
          style: {
            height: isPlacementOnYAxis(placement) ? newWidth : 'inherit',
            width: !isPlacementOnYAxis(placement) ? newWidth : '100%',
          },
        })}
      >
        {enableResizer && (
          <div
            onMouseDown={handleMouseDown}
            className={cn(
              makeClassName(`drawer-resizer`),
              'absolute rounded-md bg-gray-400',
              drawerClasses.resizeHandlerPlacement[placement],
              resizerClassName
            )}
          />
        )}
        {children}
      </DialogPanel>
    </Dialog>
  );
}

Drawer.displayName = 'Drawer';
