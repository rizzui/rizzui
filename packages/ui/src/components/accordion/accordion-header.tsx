import type { ReactNode, Ref, ButtonHTMLAttributes } from 'react';
import { useAccordion } from './accordion-context';
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
        'rizzui-accordion-header',
        'block w-full',
        className
      )}
      {...props}
    >
      {typeof children === 'function' ? children({ open: isOpen }) : children}
    </button>
  );
}
