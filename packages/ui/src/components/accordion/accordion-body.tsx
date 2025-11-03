import React, { useImperativeHandle } from 'react';
import { useAccordion } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

type AccordionBodyProps = {
  as?: 'div' | 'ul';
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<any>;
} & React.HTMLAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLUListElement>;

export function AccordionBody({ 
  as = 'div', 
  className, 
  children,
  ref,
  ...props 
}: AccordionBodyProps) {
  let Component = as;
  const { targetEl, openTargetEl } = useAccordion();
  useImperativeHandle(ref, () => targetEl.current);

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
}
