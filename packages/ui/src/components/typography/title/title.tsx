import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

const titleStyles = {
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  h5: '',
  h6: '',
};

export type TitleProps = {
  as?: keyof typeof titleStyles;
  className?: string;
};

export function Title({
  as = 'h2',
  children,
  className,
}: React.PropsWithChildren<TitleProps>) {
  const Component = as;

  return (
    <Component
      className={cn(makeClassName(`title-${as}`), titleStyles[as], className)}
    >
      {children}
    </Component>
  );
}

Title.displayName = 'Title';
