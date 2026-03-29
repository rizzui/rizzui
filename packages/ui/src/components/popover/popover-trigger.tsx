import type { ReactElement } from 'react';
import { usePopover } from './popover-context';

export function PopoverTrigger({
  children,
}: {
  children: ReactElement;
}) {
  const { getReferenceProps, refs } = usePopover();

  const child = children as ReactElement<any>;
  const triggerProps = getReferenceProps({
    ref: refs.setReference,
    ...child.props,
  });

  return <child.type {...triggerProps} />;
}
