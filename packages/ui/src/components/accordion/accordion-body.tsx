import React, { useImperativeHandle } from 'react';
import { useAccordion } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

type AccordionBodyProps = {
  as?: 'div' | 'ul';
  className?: string;
};

export const AccordionBody = React.forwardRef<
  any,
  React.PropsWithChildren<AccordionBodyProps>
>(({ as = 'div', className, children }, ref) => {
  let Component = as;
  const { targetEl, openTargetEl } = useAccordion();
  useImperativeHandle(ref, () => targetEl);

  return (
    <Component
      ref={targetEl}
      style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      className={cn(makeClassName(`accordion-panel`), className)}
    >
      {children}
    </Component>
  );
});

AccordionBody.displayName = 'AccordionBody';
