import React from 'react';
import { cn } from '../../../lib/cn';

export type ItalicProps = {
  className?: string;
} & React.HTMLAttributes<any>;

export function Italic({
  children,
  className,
  ...props
}: React.PropsWithChildren<ItalicProps>) {
  return (
    <i
      className={cn('rizzui-italic', 'text-text-secondary', className)}
      {...props}
    >
      {children}
    </i>
  );
}

Italic.displayName = 'Italic';
