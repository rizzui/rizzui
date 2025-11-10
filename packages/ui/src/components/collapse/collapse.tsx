import type { ReactNode, ElementType } from 'react';
import { cn } from '../../lib/cn';
import { useCollapse } from '../../lib/use-collapse';

export interface CollapseHeader {
  open?: boolean;
  toggle: () => void;
}

export interface CollapseProps {
  as?: 'div' | 'ul';
  header: ({ open, toggle }: CollapseHeader) => ReactNode;
  duration?: number;
  defaultOpen?: boolean;
  panelClassName?: string;
  className?: string;
  children?: ReactNode;
}

export function Collapse({
  as = 'div',
  header,
  duration,
  defaultOpen = false,
  panelClassName,
  className,
  children,
}: CollapseProps) {
  const { open, openTargetEl, targetEl, toggle } = useCollapse(
    duration,
    defaultOpen
  );
  const Component = (as || 'div') as ElementType;
  const Children = (as !== 'div' ? 'li' : 'div') as ElementType;

  return (
    <Component
      role="collapse"
      aria-expanded={open}
      data-testid="collapse-parent"
      className={cn('rizzui-collapse-root', className)}
    >
      {header({ open, toggle })}
      <Children
        ref={targetEl}
        className={cn('rizzui-collapse-panel', panelClassName)}
        style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      >
        {children}
      </Children>
    </Component>
  );
}

Collapse.displayName = 'Collapse';
