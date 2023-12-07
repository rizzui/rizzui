import React from 'react';
import { PopoverTrigger } from './popover-trigger';
import { PopoverContent } from './popover-content';
import { PopoverProvider, type PopoverProviderProps } from './popover-context';

export type PopoverProps = {} & PopoverProviderProps;

export function Popover({
  isOpen,
  setIsOpen,
  gap = 8,
  animation = 'zoomIn',
  placement = 'bottom',
  enableOverlay = false,
  showArrow = true,
  size = 'md',
  shadow = 'md',
  rounded = 'md',
  arrowClassName,
  overlayClassName,
  children,
}: React.PropsWithChildren<PopoverProps>) {
  return (
    <PopoverProvider
      value={{
        isOpen,
        setIsOpen,
        gap,
        animation,
        enableOverlay,
        showArrow,
        placement,
        size,
        shadow,
        rounded,
        arrowClassName,
        overlayClassName,
      }}
    >
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === PopoverTrigger) {
            return child;
          }
          if (React.isValidElement(child) && child.type === PopoverContent) {
            return child;
          }
          return null;
        })}
      </>
    </PopoverProvider>
  );
}

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

Popover.displayName = 'Popover';
