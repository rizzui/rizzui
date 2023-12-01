import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const drawerClasses = {
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
};

const CHECK_VALID_CUSTOM_SIZE = /(\d*px)|(\d*%)?/g;

function isPlacementOnYAxis(placement: keyof typeof drawerClasses.placement) {
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
  customSize?: string;
  /** Override default CSS style of Drawer's overlay */
  overlayClassName?: string;
  /** Set custom style classes for the Drawer container, where you can set custom Drawer size and padding and background color */
  containerClassName?: string;
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
  overlayClassName,
  containerClassName,
  className,
  children,
}: React.PropsWithChildren<DrawerProps>) {
  const TransitionComponent: React.ElementType = Transition;
  const TransitionChild: React.ElementType = Transition.Child;
  // checking customSize value
  if (customSize?.match(CHECK_VALID_CUSTOM_SIZE)) {
    const checkedCustomSizeValue =
      customSize?.match(CHECK_VALID_CUSTOM_SIZE) ?? [];
    if (checkedCustomSizeValue[0] === '') {
      console.warn(
        'customSize prop value is not valid. Please set customSize prop like -> customSize="500px" or customSize="50%"',
      );
    }
  }
  return (
    <TransitionComponent appear show={isOpen} as={Fragment}>
      <Dialog
        as="aside"
        onClose={onClose}
        className={cn(
          makeClassName(`drawer-root`),
          'fixed inset-0 z-[999] overflow-hidden',
          className,
        )}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className={cn(
              makeClassName(`drawer-overlay`),
              drawerClasses.overlay,
              overlayClassName,
            )}
          />
        </TransitionChild>
        {/*
          -> Please do not remove this Sr Only button.
          -> It's required this button to tackle the HeadlessUI's FocusTap Warnings
        */}
        <button type="button" className="sr-only">
          Sr Only
        </button>
        <TransitionChild
          as={Fragment}
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
          <div
            className={cn(
              makeClassName(`drawer-container`),
              'fixed h-full w-full break-words bg-gray-50 shadow-xl',
              placement === 'top' && 'top-0',
              placement === 'right' && 'inset-y-0 right-0',
              placement === 'bottom' && 'bottom-0',
              placement === 'left' && 'inset-y-0 left-0',
              !customSize && [
                isPlacementOnYAxis(placement)
                  ? drawerClasses.sizeOfYAxisDrawer[size]
                  : drawerClasses.sizeOfXAxisDrawer[size],
              ],
              containerClassName,
            )}
            {...(customSize && {
              style: {
                maxHeight: isPlacementOnYAxis(placement)
                  ? customSize
                  : 'inherit',
                maxWidth: !isPlacementOnYAxis(placement)
                  ? customSize
                  : 'inherit',
              },
            })}
          >
            {children}
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionComponent>
  );
}

Drawer.displayName = 'Drawer';
