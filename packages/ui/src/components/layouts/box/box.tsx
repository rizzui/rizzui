import React, { type ElementType } from 'react';
import { cn } from 'src/lib/cn';

export type BoxProps<T extends ElementType = 'div'> = {
  /* defines the component tag name to render */
  as?: T;
  ref?: React.Ref<any>;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'ref' | 'className'> & {
    className?: string;
  };

export function Box<T extends ElementType = 'div'>({
  as,
  ref,
  children,
  className,
  ...rest
}: BoxProps<T>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component ref={ref} className={cn('block', className)} {...rest}>
      {children}
    </Component>
  );
}
