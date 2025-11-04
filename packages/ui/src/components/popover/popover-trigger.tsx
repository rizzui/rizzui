import React, { ReactElement } from 'react';
import { usePopover } from './popover-context';

export function PopoverTrigger({
  children,
}: {
  children: ReactElement & { ref?: React.RefObject<any> };
}) {
  const { getReferenceProps, refs } = usePopover();
  
  const triggerElement = React.cloneElement(
    children,
    getReferenceProps({ ref: refs.setReference, ...(typeof children.props === 'object' ? children.props : {}) })
  );
  
  return <>{triggerElement}</>;
}
