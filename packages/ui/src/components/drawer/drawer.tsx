import React from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild as HeadLessTransitionChild,
} from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { useResizeHandler } from './drawer.lib';

export const drawerClasses = {
  overlay:
    'fixed inset-0 cursor-pointer bg-black bg-opacity-60 transition-opacity dark:bg-opacity-80',
  placement: {
    top: '-translate-y-full',
    right: 'translate-x-full',
    bottom: 'translate-y-full',
    left: '-translate-x-full',
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

// const CHECK_VALID_CUSTOM_SIZE = /(\d*px)|(\d*%)?/g;

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
  /** Enable resizer for Drawer */
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
  const TransitionComponent: React.ElementType = Transition;
  const TransitionChild: React.ElementType = HeadLessTransitionChild;
  const { handleMouseDown, containerRef, width } = useResizeHandler({
    placement,
  });

  const newWidth = width !== 0 ? width : customSize;

  return (
    <TransitionComponent appear show={isOpen} as="div">
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
        <TransitionChild
          as="div"
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={cn(
              makeClassName(`drawer-overlay`),
              drawerClasses.overlay,
              overlayClassName
            )}
          />
        </TransitionChild>
        {/*
          -> Please do not remove this Sr Only button.
          -> It's required this button to tackle the HeadlessUI's FocusTap Warnings
        */}
        <button type="button" className="sr-only !min-w-[320px]">
          Sr Only
        </button>
        <TransitionChild
          as="div"
          enter="transform transition ease-in-out duration-300"
          enterFrom={drawerClasses.placement[placement]}
          enterTo={
            isPlacementOnYAxis(placement) ? 'translate-y-0' : 'translate-x-0'
          }
          leave="transform transition ease-in-out duration-300"
          leaveFrom={
            isPlacementOnYAxis(placement) ? 'translate-y-0' : 'translate-x-0'
          }
          leaveTo={drawerClasses.placement[placement]}
        >
          <DialogPanel
            ref={containerRef}
            className={cn(
              makeClassName(`drawer-container`),
              'fixed h-full w-full break-words bg-background shadow-xl',
              placement === 'top' && 'top-0',
              placement === 'right' && 'inset-y-0 right-0',
              placement === 'bottom' && 'bottom-0',
              placement === 'left' && 'inset-y-0 left-0',
              customSize && [
                isPlacementOnYAxis(placement)
                  ? 'max-h-screen min-h-96'
                  : 'min-w-96 max-w-full',
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
                  'absolute rounded-md bg-gray-400',
                  drawerClasses.resizeHandlerPlacement[placement],
                  resizerClassName
                )}
              />
            )}
            {children}
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionComponent>
  );
}

Drawer.displayName = 'Drawer';
