import React from 'react';
import { AccordionHeader } from './accordion-header';
import { AccordionBody } from './accordion-body';
import { AccordionProvider } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

export type AccordionProps = {
  as?: 'div' | 'li';
  defaultOpen?: boolean;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
};

export function Accordion({
  as = 'div',
  defaultOpen,
  duration,
  className,
  children,
}: AccordionProps) {
  let Component = as;

  return (
    <AccordionProvider defaultOpen={defaultOpen} duration={duration}>
      <Component className={cn(makeClassName(`accordion-root`), className)}>
        {children}
      </Component>
    </AccordionProvider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
