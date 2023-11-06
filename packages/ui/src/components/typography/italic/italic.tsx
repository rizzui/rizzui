import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

export type ItalicProps = {
  className?: string;
} & React.HTMLAttributes<any>;

export function Italic({
  children,
  className,
  ...props
}: React.PropsWithChildren<ItalicProps>) {
  return (
    <i className={cn(makeClassName(`italic`), className)} {...props}>
      {children}
    </i>
  );
}

Italic.displayName = 'Italic';
