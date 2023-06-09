import React from 'react';
import Tooltip from '../tooltip';
import { TooltipProps } from '../tooltip';

export type PopoverProps = Omit<TooltipProps, 'isPopover' | 'color'>;

/**
 * Popover is a simple dialog alert which can have details of the content.
 * It can either have a confirm, cancel button or any action that can be triggered by the user's decision.
 */
export default function Popover({ children, ...props }: PopoverProps) {
  return (
    <Tooltip isPopover={true} color="invert" {...props}>
      {children}
    </Tooltip>
  );
}

Popover.displayName = 'Popover';
