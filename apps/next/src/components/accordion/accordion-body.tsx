import React, { useImperativeHandle } from 'react';
import { useAccordion } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

type AccordionBodyProps = {
  as?: 'div' | 'ul';
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLUListElement>;

export const AccordionBody = React.forwardRef<
  any,
  React.PropsWithChildren<AccordionBodyProps>
>(({ as = 'div', className, children, ...props }, ref) => {
  let Component = as;
  const { targetEl, openTargetEl } = useAccordion();
  useImperativeHandle(ref, () => targetEl);

  return (
    <Component
      ref={targetEl}
      style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      className={cn(makeClassName(`accordion-panel`), className)}
      {...props}
    >
      {children}
    </Component>
  );
});

AccordionBody.displayName = 'AccordionBody';
