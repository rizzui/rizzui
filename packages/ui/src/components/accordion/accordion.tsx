import type { ReactNode, ElementType } from 'react';
import { AccordionHeader } from './accordion-header';
import { AccordionBody } from './accordion-body';
import { AccordionProvider } from './accordion-context';
import { cn } from '../../lib/cn';

export type AccordionProps = {
  as?: 'div' | 'li';
  defaultOpen?: boolean;
  duration?: number;
  className?: string;
  children?: ReactNode;
};

export function Accordion({
  as = 'div',
  defaultOpen,
  duration,
  className,
  children,
}: AccordionProps) {
  const Component = (as || 'div') as ElementType;

  return (
    <AccordionProvider defaultOpen={defaultOpen} duration={duration}>
      <Component className={cn('rizzui-accordion-root', className)}>
        {children}
      </Component>
    </AccordionProvider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
