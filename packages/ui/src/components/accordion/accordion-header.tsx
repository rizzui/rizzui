import type { ReactNode, Ref, ButtonHTMLAttributes } from 'react';
import { useAccordion } from './accordion-context';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

type AccordionHeaderProps = {
  className?: string;
  children: ReactNode | (({ open }: { open: boolean }) => ReactNode);
  ref?: Ref<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function AccordionHeader({
  children,
  className,
  ref,
  ...props
}: AccordionHeaderProps) {
  const { isOpen, toggle } = useAccordion();

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
      {typeof children === 'function' ? children({ open: isOpen }) : children}
    </button>
  );
}
