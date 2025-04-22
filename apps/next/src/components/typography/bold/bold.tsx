import React from 'react';
import { cn } from '../../../lib/cn';
import { makeClassName } from '../../../lib/make-class-name';

export type BoldProps = {
  className?: string;
} & React.HTMLAttributes<any>;

export function Bold({
  children,
  className,
  ...props
}: React.PropsWithChildren<BoldProps>) {
  return (
    <b className={cn(makeClassName(`bold`), className)} {...props}>
      {children}
    </b>
  );
}

Bold.displayName = 'Bold';
