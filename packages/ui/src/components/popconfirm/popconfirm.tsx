'use client';

import Tooltip from '../tooltip';
import { TooltipProps } from '../tooltip';

export interface PopconfirmProps
  extends Omit<TooltipProps, 'isPopconfirm' | 'color'> {}

/**
 * Popconfirm is a simple dialog alert which can have details of the content.
 * It can either have a confirm, cancel button or any action that can be triggered by the user's decision.
 */
const Popconfirm = ({ children, ...props }: PopconfirmProps) => (
  <Tooltip isPopconfirm={true} color="invert" {...props}>
    {children}
  </Tooltip>
);

Popconfirm.displayName = 'Popconfirm';
export default Popconfirm;
