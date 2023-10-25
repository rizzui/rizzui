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
};

export function Accordion({
  as = 'div',
  defaultOpen,
  duration,
  className,
  children,
  ...props
}: React.PropsWithChildren<AccordionProps>) {
  let Component = as;

  return (
    <AccordionProvider defaultOpen={defaultOpen} duration={duration}>
      <Component className={cn(makeClassName(`accordion-root`), className)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionHeader) {
            return React.cloneElement(child);
          }
          if (React.isValidElement(child) && child.type === AccordionBody) {
            return child;
          }
          return null;
        })}
      </Component>
    </AccordionProvider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

Accordion.displayName = 'Accordion';
