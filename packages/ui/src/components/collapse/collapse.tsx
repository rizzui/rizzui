import React from 'react';
import { cn } from '../../lib/cn';
import { useCollapse } from '../../lib/use-collapse';
import { makeClassName } from '../../lib/make-class-name';

export interface CollapseHeader {
  /** Whether or not the `Collapse` is open. */
  open?: boolean;
  /** A callback function to collapsed and expanded `Collapse` panel with transition */
  toggle: () => void;
}

export interface CollapseProps {
  /** Set HTML as of the `Collapse` component. Either `div` Or `ul`, default is `div` */
  as?: 'div' | 'ul';
  /** Header component of the `Collapse` */
  header: ({ open, toggle }: CollapseHeader) => React.ReactNode;
  /** Set transition duration */
  duration?: number;
  /** Initial active panel */
  defaultOpen?: boolean;
  /** Add custom classes to the `Collapse` panel for extra style */
  panelClassName?: string;
  /** Add custom classes to the `Collapse` component for extra style */
  className?: string;
}

/**
 * A content area which can be collapsed and expanded.
 * Completely unstyled, fully accessible UI components,
 * designed to integrate beautifully with Tailwind CSS.
 */
export function Collapse({
  as = 'div',
  header,
  duration,
  defaultOpen = false,
  panelClassName,
  className,
  children,
}: React.PropsWithChildren<CollapseProps>) {
  const { open, openTargetEl, targetEl, toggle } = useCollapse(
    duration,
    defaultOpen
  );
  const Component = as;
  const Children = as !== 'div' ? 'li' : 'div';
  return (
    <Component
      role="collapse"
      aria-expanded={open}
      data-testid="collapse-parent"
      className={cn(makeClassName(`collapse-root`), className)}
    >
      {header({ open, toggle })}
      <Children
        ref={targetEl}
        className={cn(makeClassName(`collapse-panel`), panelClassName)}
        style={!openTargetEl ? { display: 'none' } : { display: 'block' }}
      >
        {children}
      </Children>
    </Component>
  );
}

Collapse.displayName = 'Collapse';
