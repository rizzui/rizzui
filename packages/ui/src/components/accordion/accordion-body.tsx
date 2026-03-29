import {
  useImperativeHandle,
  type ReactNode,
  type Ref,
  type HTMLAttributes,
  type ElementType,
} from 'react';
import { useAccordion } from './accordion-context';
import { cn } from '../../lib/cn';

type AccordionBodyProps = {
  as?: 'div' | 'ul';
  className?: string;
  children?: ReactNode;
  ref?: Ref<any>;
} & HTMLAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLUListElement>;

export function AccordionBody({
  as = 'div',
  className,
  children,
  ref,
  ...props
}: AccordionBodyProps) {
  const Component = (as || 'div') as ElementType;
  const { targetEl, openTargetEl } = useAccordion();
  useImperativeHandle(ref, () => targetEl.current);

  return (
    <Component
      ref={targetEl}
      style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      className={cn('rizzui-accordion-panel', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
