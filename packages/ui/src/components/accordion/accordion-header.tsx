import React from 'react';
import { useAccordion } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

type AccordionHeaderProps = {
  className?: string;
  children:
    | React.ReactNode
    | (({ open }: { open: boolean }) => React.ReactNode);
  ref?: React.Ref<HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function AccordionHeader({ 
  children, 
  className, 
  ref,
  ...props 
}: AccordionHeaderProps) {
  const { isOpen, toggle } = useAccordion();
  const isChildrenFunction = typeof children === 'function';

  return (
    <button
      ref={ref}
      onClick={() => toggle()}
      className={cn(
        makeClassName(`accordion-header`),
        'block w-full',
        className
      )}
      {...props}
    >
      {isChildrenFunction ? children({ open: isOpen }) : children}
    </button>
  );
}
