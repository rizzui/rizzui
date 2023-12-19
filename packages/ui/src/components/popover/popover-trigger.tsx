import React, { cloneElement } from 'react';
import { usePopover } from './popover-context';

export function PopoverTrigger({
  children,
}: {
  children: JSX.Element & { ref?: React.RefObject<any> };
}) {
  const { getReferenceProps, refs } = usePopover();
  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: refs.setReference, ...children.props }),
      )}
    </>
  );
}

PopoverTrigger.displayName = 'PopoverTrigger';
